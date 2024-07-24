import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

import { getAccessToken, getUserDetails } from "../lib/auth/auth";

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [refreshToken, setRefreshToken, removeRefreshToken] = useLocalStorage(
    "refreshToken",
    "",
    { raw: true },
  );

  const logout = () => {
    queryClient.invalidateQueries({ queryKey: ["user"] });
    queryClient.invalidateQueries({ queryKey: ["token"] });
    removeRefreshToken();
    navigate("/login");
  };

  const tokenQuery = useQuery({
    queryKey: ["token"],
    queryFn: () => getAccessToken(refreshToken),
    enabled: !!refreshToken && refreshToken.length > 0,
  });

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetails(tokenQuery.data?.access_token),
    enabled:
      !!tokenQuery.data?.access_token.length &&
      tokenQuery.data?.access_token.length > 0,
  });

  return {
    tokenQuery,
    setRefreshToken,
    userQuery,
    logout,
  };
}

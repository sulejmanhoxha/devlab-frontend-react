import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

import {
  createAccount,
  getAccessToken,
  getUserDetails,
} from "../lib/auth/auth";

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage(
    "accessToken",
    "",
    { raw: true },
  );

  const logout = () => {
    console.log("logout");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    queryClient.invalidateQueries({ queryKey: ["token"] });
    removeAccessToken();
    navigate("/login");
  };

  const tokenLoginMutation = useMutation({
    mutationFn: (data) => getAccessToken(data),
    onSuccess: (data) => {
      console.log(data);
      setAccessToken(data.access_token);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
  });

  // const userQuery = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () => getUserDetails(tokenQuery.data?.access_token),
  //   enabled:
  //     accessToken &&
  //     accessToken.length > 0 &&
  //     !!tokenLoginMutation.data?.access_token.length &&
  //     tokenLoginMutation.data?.access_token.length > 0,
  // });
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetails(accessToken),
    enabled: !!tokenLoginMutation.data?.access_token || !!accessToken,
  });

  const createUserMutation = useMutation({
    mutationFn: (data) => createAccount(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      removeAccessToken();
      navigate("/login");
    },
  });

  return {
    tokenLoginMutation,
    accessToken,
    setAccessToken,
    userQuery,
    createUserMutation,
    logout,
  };
}

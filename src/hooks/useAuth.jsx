import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";
import {
  createAccount,
  getAccessToken,
  getUserDetails,
  updateAccount,
} from "../lib/auth/auth";

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage(
  //   "accessToken",
  //   "",
  //   { raw: true },
  // );

  const { accessToken, setAccessToken } = useGlobalContext();

  const logout = () => {
    console.log("logout");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    queryClient.invalidateQueries({ queryKey: ["token"] });
    setAccessToken("");
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
    refetchInterval: false,
  });

  const createUserMutation = useMutation({
    mutationFn: (data) => createAccount(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setAccessToken("");
      navigate("/login");
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: ({ data, id, accessToken }) =>
      updateAccount(data, id, accessToken),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setAccessToken("");
      navigate("/login");
    },
  });

  return {
    tokenLoginMutation,
    accessToken,
    setAccessToken,
    userQuery,
    createUserMutation,
    updateProfileMutation,
    logout,
  };
}

import { useEffect } from "react";

export const useGetUserData = () => {
  let accessToken = localStorage.getItem("access_token");
  let user = localStorage.getItem("user");

  return user && { accessToken, ...JSON.parse(user) };
};

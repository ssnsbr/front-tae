import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import axios, { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import { axiosAuth } from "./axios";

const ApiClient = () => {
  // Axios Interceptor Instance

  const setToken = (token: string) => {
    axiosAuth.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  // Before a request is sent, the interceptor checks for a token
  axiosAuth.interceptors.request.use(async (config) => {
    if (config.headers.Authorization) return config;
    // const session = await getServerSession(authOptions);
    const session = await getSession();
    const accessToken = session?.token;
    if (session) {
      const authHeaderValue = `Bearer ${session.token}`;
      //   config.headers.Authorization = `Bearer ${session.token}`;

      config.headers.Authorization = authHeaderValue;
      axiosAuth.defaults.headers.common.Authorization = authHeaderValue;

      console.log("axiosInstance:", "authHeaderValue:", authHeaderValue);
    } else {
      console.log("axiosInstance:", "authHeaderValue:", "No Session!");
    }
    return config;
  });

  // Axios Interceptor: Response Method
  // After a response is received, the interceptor can modify it if needed.
  // Any errors during the response can be handled globally.
  axiosAuth.interceptors.response.use(
    (response) => {
      // Can be modified response
      return response;
    },
    async (error: AxiosError) => {
      //   toast.error("expired session");

      // axiosAuth.defaults.headers.common.Authorization = undefined;
      // await signOut({ callbackUrl: "/" });

      return Promise.reject(error);
    }
  );
  return axiosAuth;
};
export default ApiClient();

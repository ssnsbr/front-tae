import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import axios, { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { getSession, signOut } from "next-auth/react";

const ApiClient = () => {
  // Axios Interceptor Instance
  const AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
  });
  const setToken = (token: string) => {
    AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };
  AxiosInstance.interceptors.request.use(async (config) => {
    if (config.headers.Authorization) return config;

    // const session = await getServerSession(authOptions);
    const session = await getSession();
    const accessToken = session?.token;
    if (session) {
      const authHeaderValue = `Bearer ${session.token}`;
      //   config.headers.Authorization = `Bearer ${session.token}`;

      config.headers.Authorization = authHeaderValue;
      AxiosInstance.defaults.headers.common.Authorization = authHeaderValue;
    }
    return config;
  });

  // Axios Interceptor: Response Method

  AxiosInstance.interceptors.response.use(
    (response) => {
      // Can be modified response
      return response;
    },
    async (error: AxiosError) => {
      //   toast.error("expired session");

      AxiosInstance.defaults.headers.common.Authorization = undefined;
      await signOut({ callbackUrl: "/" });

      return Promise.reject(error);
    }
  );
  return AxiosInstance;
};
export default ApiClient();

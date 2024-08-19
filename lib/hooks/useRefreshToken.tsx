"use client";

import { refresh_token_url } from "@/api/global-urls";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await axios.post(refresh_token_url, {
      refresh: session?.refresh,
    });

    if (session) session.token = res.data.accessToken;
    else signIn();
  };
  return refreshToken;
};

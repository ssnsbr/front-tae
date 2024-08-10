// "use client"
import React from "react";
import { user_url } from "@/api/globalurls";
import axios from "axios";
import SessionData from "./session-data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  // console.log("in-getServerSession-session:", session);

  const response = await axios(user_url, {
    headers: {
      Authorization: "Bearer " + session?.token,
    },
  }).catch((e) => console.log("e"));
  const data = response?.data;
  // console.log("res:", data);
  const loading = false;
  return (
    <div>
      {" "}
      <div>
        <SessionData session={session} />
      </div>
      <div>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2>Doing stuff with data</h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <h2 className="sr-only">User</h2>
                {data?.email}-{data?.username}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

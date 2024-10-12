import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";

const BASE_URL = "http://localhost:8000";
// const BASE_URL = "http://localhost:3000";

async function refreshToken(refreshToken: string) {
  const res = await fetch(BASE_URL + "/api/dj-rest-auth/token/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  });
  const rdata = await res;

  console.log("rdata:",rdata);
  const data = rdata.json();
  data.then((result) => console.log("data::result: ", result));
  return data;
}

export async function AuthGetApi(url: string) {
  const session = await getServerSession(authOptions);
  console.log("before: ", session?.token);

  let res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  });

  if (res.status == 401) {
    if (session) session.token = await refreshToken(session?.refresh ?? "");
    console.log("after: ", session?.token);

    res = await fetch( url, {
      method: "GET",
      headers: {
        Authorization: `bearer ${session?.token}`,
      },
    });
    return await res.json();
  }

  return await res.json();
}

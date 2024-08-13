"use client";
import { cart_item_url } from "@/api/global-urls";
import axios from "axios";
import React, { useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

const AddtocartButton = (prop: any) => {
  const { data: session, status } = useSession();
  //   useEffect(() => {
  //     console.log("session:", session);
  //   }, [session]);

  console.log("prop:", prop);

  const addToCart = (token: any) => {
    console.log("session:");
    console.log("session:", "Bearer " + token);
    console.log("session:", "Bearer " + token);

    axios({
      method: "post",
      url: `${cart_item_url}`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: { vendor_product: prop.product_id },
    })
      .then((r) => console.log("res:", r))
      .catch((e) => console.log("error", e));
  };

  return (
    <>
      {status === "unauthenticated" && <h2>Loading...</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "authenticated" && (
        <button
          type="submit"
          onClick={() => addToCart(session.token)}
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to bag
        </button>
      )}
    </>
  );
};

export default AddtocartButton;

"use client";
import { cart_item_url } from "@/api/global-urls";
import React, { useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import axiosInstance from "@/lib/axiosInstance";
import ApiClient from "@/lib/axiosInstance";

import axios from "@/lib/axios";

const AddtoCartButton = ({ v_p }: any) => {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);

  //   useEffect(() => {
  //     console.log("session:", session);
  //   }, [session]);

  const addToCart = () => {
    console.log("AddtoCartButton:", v_p.id);
    console.log("AddtoCartButton:", session?.token);

    if (session) {
      ApiClient({
        method: "post",
        url: `${cart_item_url}`,
        data: { vendor_product: v_p.id },
      });
      axios({
        method: "post",
        url: `${cart_item_url}`,
        data: { vendor_product: v_p.id },
        headers: {
          Authorization: `bearer ${session?.token}`,
        },
      })
        .then((r) => console.log("res:", r))
        .catch((e) => console.log("error", e));
    } else {
    }
  };

  return (
    <div>
      <button
        type="submit"
        onClick={() => addToCart()}
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <div>
          <p>خرید از {v_p.vendor_name}</p>
          <p> با قیمت {v_p.price}</p>
        </div>
      </button>
    </div>
  );
};

export default AddtoCartButton;

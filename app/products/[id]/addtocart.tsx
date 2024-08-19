"use client";
import { cart_item_url } from "@/api/global-urls";
import React, { useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import axiosInstance from "@/lib/axiosInstance";

const AddtoCartButton = ({ v_p }: any) => {
  console.log("Here", v_p);

  // const { data: session, status } = useSession();
  //   useEffect(() => {
  //     console.log("session:", session);
  //   }, [session]);

  console.log("AddtoCartButton:", v_p);

  // const addToCart = () => {
  //   if (session) {
  //     axiosInstance({
  //       method: "post",
  //       url: `${cart_item_url}`,
  //       data: { vendor_product: v_p.product_id },
  //     })
  //       .then((r) => console.log("res:", r))
  //       .catch((e) => console.log("error", e));
  //   }
  // };

  return (
    <div>
      <button
        type="submit"
        // onClick={() => addToCart()}
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

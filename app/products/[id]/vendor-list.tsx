import { cart_item_url, single_product_url } from "@/api/global-urls";
import axios from "axios";
import React, { useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/auth";
import AddtoCartButton from "./add-to-cart";

const AddtocartButtonList = ({ vendor_product }: any) => {
  // const { data: session, status } = useSession();
  // const { data: session, status } = getServerSession();
  //   useEffect(() => {
  //     console.log("session:", session);
  //   }, [session]);
  console.log("AddtocartButtonList:", vendor_product[0]);

  return (
    <div>
      <div>
        {vendor_product.map((i: any) => {
          return (
            <div key={i}>
              <AddtoCartButton v_p={i} />
            </div>
          );
        })}
      </div>
      {/* {status === "unauthenticated" && <h2>Loading...</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "authenticated" &&  */}
    </div>
  );
};

export default AddtocartButtonList;

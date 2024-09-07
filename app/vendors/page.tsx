import React from "react";
import VendorItem from "./VendorItem";
import { VendorType } from "./types";
import { getVendorsList } from "./vendor-call";

const SellersPage = async () => {
  let vendors_list = await getVendorsList();
  return (
    <>
      <div className="bg-white">
        <h2>Vendors:</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <h2 className="sr-only">Products</h2>
          {vendors_list.map((vendor: VendorType) => VendorItem(vendor))}
        </div>
      </div>
    </>
  );
};

export default SellersPage;

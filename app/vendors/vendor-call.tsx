import { vendor_detail_url, vendors_url } from "@/api/global-urls";
// import React, { useEffect, useState } from "react";
import axios from "axios";

const getVendorDetail = async (id: any) => {
  return await axios.get(`${vendor_detail_url}${id}`);
};

export const getVendorsList = async () => {
  let data = await fetch(`${vendors_url}`);
  return await data.json();
};

export default getVendorDetail;

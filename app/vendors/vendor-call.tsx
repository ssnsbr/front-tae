import { vendor_detail_url, vendors_url } from "@/api/global-urls";
// import React, { useEffect, useState } from "react";
import axios from "axios";

const getVendorDetail = async (id: any) => {
  return await axios.get(`${vendor_detail_url}${id}`);
};

export const getVendorsList = async () => {
  try {
    let response = await fetch(`${vendors_url}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch vendors:", error);
    return []; // Return an empty array or handle error appropriately
  }
};

export default getVendorDetail;

import { vendor_detail_url, vendors_url } from "@/api/global-urls";
import axios from "axios";
import { VendorType } from "./types";

// Fetch vendor detail by ID
export const getVendorDetail = async (
  id: number | string
): Promise<VendorType | null> => {
  try {
    const response = await axios.get<VendorType>(`${vendor_detail_url}${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch vendor detail for ID ${id}:`, error);
    return null; // Return null if the detail could not be fetched
  }
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

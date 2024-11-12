import { product_media_url, products_list_url } from "@/api/global-urls";

// Fetch Products List
export const getProductMediaList = async (slug: string) => {
  try {
    let response = await fetch(`${product_media_url}${slug}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json(); // Await the JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return []; // Return an empty array if an error occurs
  }
};

export default getProductMediaList;

import { useEffect, useState } from "react";
import axios from "axios";
import { products_list_url, single_product_url } from "../global-urls";
import { ProductType } from "../types";

type FetchProductListResult = {
  data: ProductType[];
  loading: boolean;
};

export const useFetchProductList = (): FetchProductListResult => {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(products_list_url);
        // console.log("response:", response);
        setData(response);
      } catch (error) {
        console.error("error:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

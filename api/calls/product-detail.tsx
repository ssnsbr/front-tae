import { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "../types";
import { single_product_url } from "../global-urls";

type FetchProductResult = {
  data: ProductType;
  loading: boolean;
};

export const useFetchProduct = (id: string): FetchProductResult => {
  console.log("response");

  const [data, setData] = useState<ProductType>({
    name: "",
    id: "",
    description: "",
    price: "",
    category: "",
    data: "",
    first_image : "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(single_product_url + id);
        console.log(single_product_url + id);

        console.log(response);
        setData(response);
      } catch (error) {
        console.error(error);
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
export default useFetchProduct;

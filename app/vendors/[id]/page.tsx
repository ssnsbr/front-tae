import ProductItem from "@/app/products/ProductItem";
import React from "react";
import getVendorDetail from "../vendor-call";
import { iProps } from "../types";

// export async function getServerSideProps(params: any) {
//   const slug = params.query.id;
//   console.log(`getting ${singleproducturl}${slug}`);
//   const { data: response } = await axios.get(`${singleproducturl}${slug}`);
//   console.log(response);
//   return { props: { data: response} };
// }

const Product = async (params: iProps) => {
  const slug = params.params.id;
  const { data: response } = await getVendorDetail(`${slug}`);

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {response.store_name}
            {response.id}
          </h1>
          <h2>{response.store_bio}</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <h2 className="sr-only">Products</h2>
            {response.vendor_products.map((p: any) =>
              ProductItem({
                data: "any",
                id: p.product,
                name: p.product_name,
                description: "",
                price: p.price,
                category: "string",
                first_image: p.product_image,
                // add other properties as needed
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

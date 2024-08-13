import { single_product_url } from "@/api/global-urls";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddtocartButtonList from "../addtocartlist";

// export async function getServerSideProps(params: any) {
//   const slug = params.query.id;
//   console.log(`getting ${singleproducturl}${slug}`);
//   const { data: response } = await axios.get(`${singleproducturl}${slug}`);
//   console.log(response);
//   return { props: { data: response} };
// }
interface iProps {
  params: { id: string };
}

const Product = async (params: iProps) => {
  const [adata, setData] = useState<any | null>(null);

  const slug = params.params.id;
  console.log(`getting! ${params}`);

  console.log(`getting ${single_product_url}${slug}`);
  const { data: response } = await axios.get(`${single_product_url}${slug}`);
  console.log(response);

  const loading = false;
  const data = response;

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {data.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {/* {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  aria-hidden="true"
                  className={classNames(
                    reviews.average > rating
                      ? "text-gray-900"
                      : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                />
              ))} */}
                </div>
                {/* <p className="sr-only">{reviews.average} out of 5 stars</p> */}
                {/* <a
              href={reviews.href}
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {reviews.totalCount} reviews
            </a> */}
              </div>
            </div>

            <AddtocartButtonList product_id={data} />
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{data.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                {/* <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="text-gray-400">
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul> */}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                {/* <p className="text-sm text-gray-600">{product.details}</p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

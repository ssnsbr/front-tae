// "use client";
import React from "react";
import { useFetchProductList } from "../../api/calls/productlist";
import ProductItem from "./ProductItem";
import getProductsList from "./product-call";
import { ProductType } from "@/api/types";

const ProductsPage = async () => {
  const products = await getProductsList(); // Fetch products
  const loading = false;
  return (
    <div>
      {" "}
      {loading && <div>Loading {loading}</div>}
      {!loading && products.length == 0 && (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2>Doing stuff with data: {loading.toString()}</h2>
          </div>
        </div>
      )}
      {!loading && (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <h2 className="sr-only">Products</h2>
              {products.length > 0 ? (
                products.map((product: ProductType) => (
                  <ProductItem key={product.id} product={product} />
                ))
              ) : (
                <p>No products available at the moment.</p>
              )}{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetchProductList } from "../../api/productlist";
import ProductItem from "./ProductItem";

const ProductsPage = () => {
  const { data, loading } = useFetchProductList();

  return (
    <div>
      {" "}
      {loading && <div>Loading {loading.toString()}</div>}
      {!loading && data.length == 0 && (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2>Doing stuff with data: {loading.toString()}</h2>
          </div>
        </div>
      )}
      {!loading && (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2>
              {data.map((items) => (
                <h2>{items.toString()}</h2>
              ))}
            </h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <h2 className="sr-only">Products</h2>
              {data.map((item) => ProductItem(item))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

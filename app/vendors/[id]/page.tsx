import ProductItem from "@/app/products/ProductItem";
import React from "react";
import getVendorDetail from "../vendor-call";
import { iProps } from "../types";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";

const Vendor = async (params: iProps) => {
  const slug = params.params.id;
  const response = await getVendorDetail(`${slug}`);

  // Handle case when response is null or undefined
  if (!response) {
    return (
      <Box className="mx-auto max-w-7xl p-6">
        <Text className="text-lg text-red-500">Vendor not found.</Text>
      </Box>
    );
  }

  return (
    <Box className="mx-auto max-w-7xl p-6 lg:flex lg:gap-8">
      <Box className="lg:w-2/3 border-r border-gray-200 pr-8">
        <Heading
          as="h1"
          className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {response.store_name}
        </Heading>
        <Text className="h2 mt-2 text-lg text-gray-700 dark:text-gray-300">
          {response.store_bio}
        </Text>
        <Box className="mt-6">
          <Heading
            as="h3"
            className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Products
          </Heading>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {response.vendor_products.map((p: any) => (
              <ProductItem
                key={p.product}
                data="any"
                id={p.product}
                name={p.product_name}
                description=""
                price={p.price}
                category="string"
                first_image={p.product_image}
                // add other properties as needed
              />
            ))}
          </div>
        </Box>
      </Box>
      <Box className="lg:w-1/3 lg:pl-8">
        <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2">
          Contact Vendor
        </Button>
      </Box>
    </Box>
  );
};

export default Vendor;

// app/vendors/page.tsx
import React from "react";
import VendorItem from "./VendorItem";
import { VendorType } from "./types";
import { getVendorsList } from "./vendor-call";
import { Box, Flex, Heading, Container } from "@radix-ui/themes";

const SellersPage = async () => {
  try {
    const vendors_list = await getVendorsList();

    return (
      <Container className="py-8">
        <Box className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <Heading
            as="h2"
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Vendors
          </Heading>
          <Flex className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {vendors_list.map((vendor: VendorType) => (
              <VendorItem key={vendor.id} vendor={vendor} />
            ))}
          </Flex>
        </Box>
      </Container>
    );
  } catch (error) {
    return (
      <div className="text-red-600">
        Failed to load vendors. Please try again.
      </div>
    );
  }
};

export default SellersPage;

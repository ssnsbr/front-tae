// VendorItem.tsx
import { Avatar, Box, Card, Flex, Link, Text } from "@radix-ui/themes";
import React from "react";
import { AiFillFileImage } from "react-icons/ai";
import { VendorType } from "./types";

interface VendorItemProps {
  vendor: VendorType;
}

const VendorItem: React.FC<VendorItemProps> = ({ vendor }) => (
  <Link href={`vendors/${vendor.id}`} className="block">
    <Card className="hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300">
      <div className="relative overflow-hidden rounded-lg bg-white border border-gray-200">
        <Avatar
          src={vendor.avatar_url} // Assuming `avatarUrl` is the image source for the vendor
          alt={vendor.store_name}
          className="h-48 w-full object-cover transition-opacity duration-300 hover:opacity-90"
          fallback={<AiFillFileImage size="48" />}
        />
        <Box p="4">
          <Text className="h3 text-lg font-semibold text-gray-800 mb-1">
            {vendor.store_name}
          </Text>
          <Flex justify="between" align="center" className="mt-1 text-gray-600">
            <Text className="text-sm">View More</Text>
          </Flex>
        </Box>
      </div>
    </Card>
  </Link>
);

export default VendorItem;

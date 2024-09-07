import { Avatar, Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes";
import React from "react";
import strings from "@/dictionaries/fa.json";
import { AiFillFileImage } from "react-icons/ai";
import { VendorType } from "./types";
const VendorItem = (vendor: VendorType) => {
  return (
    <div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Box maxWidth="540px">
          {/* <Link href={singleproducturl+{id}} > */}
          <Link href={`vendors/${vendor.id}`}>
            <Card>
              <Flex gap="3" align="center">
                <Avatar
                  className="h-fu ll w-full object-cover object-center group-hover:opacity-75"
                  size="8"
                  radius="full"
                  // src={root + first_image.image_url}
                  fallback={<AiFillFileImage />}
                ></Avatar>
              </Flex>
              <Box>
                <h3 className="mt-4 text-sm text-gray-700">
                  {vendor.store_name}
                </h3>
                {/*             
              <Text as="div" size="2" weight="bold">
                {name}
              </Text> */}
                <Text as="div" size="2" color="gray">
                  {/* {description} */}
                </Text>
              </Box>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {vendor.store_bio}
              </p>

              <Button> {strings.Buy}</Button>
            </Card>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default VendorItem;
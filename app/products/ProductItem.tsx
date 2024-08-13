import { single_product_url } from "@/api/global-urls";
import { ProductType } from "@/api/types";
import { Avatar, Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes";
import { Description } from "@radix-ui/themes/src/components/alert-dialog.jsx";
import React from "react";

const ProductItem = ({ name, id, price, description }: ProductType) => {
  return (
    <div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Box maxWidth="360px">
          {/* <Link href={singleproducturl+{id}} > */}
        <Link href={`products/${id}`}>

            <Card>
              <Flex gap="3" align="center">
                <Avatar
                  className="h-fu ll w-full object-cover object-center group-hover:opacity-75"
                  size="3"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
              </Flex>
              <Box>
                <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                {/*             
              <Text as="div" size="2" weight="bold">
                {name}
              </Text> */}
                <Text as="div" size="2" color="gray">
                  {/* {description} */}
                </Text>
              </Box>
              <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>

              <Button> Buy</Button>
            </Card>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default ProductItem;

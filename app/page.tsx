import Image from "next/image";
import VendorItem from "./vendors/VendorItem";
import { getVendorsList } from "./vendors/vendor-call";
import { useFetchProductList } from "@/api/calls/productlist";
import { VendorType } from "./vendors/types";
import ProductItem from "./products/ProductItem";
import { products_list_url } from "@/api/global-urls";
import { ProductType } from "@/api/types";
import getProductsList from "./products/product-call";

// Home Component
export default async function Home() {
  const products = await getProductsList(); // Fetch products
  const vendors_list = await getVendorsList(); // Fetch vendors

  return (
    <div className="container mx-auto p-4">
      {/* First Row: Vendors */}
      <div className="vendors-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vendors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vendors_list.map((vendor: VendorType) => (
            <VendorItem key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>

      {/* Second Row: Products */}
      <div className="products-section">
        <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product: ProductType) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No products available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

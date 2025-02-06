import React from "react";
import { ProductData } from "../../type";
import { getProductsData } from "@/app/lib/getData";
import ProductCard from "./ProductCard";
import Container from "./Container";

const ProductList = async () => {
  const products: ProductData[] = await getProductsData();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products?.map((item) => <ProductCard item={item} key={item?._id} />)}
      </div>
    </Container>
  );
};

export default ProductList;

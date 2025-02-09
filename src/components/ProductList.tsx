import React from "react";
import { ProductData } from "../../type";
import { getProductsData } from "@/app/lib/getData";
import ProductCard from "./ProductCard";
import Container from "./Container";

const ProductList = async () => {
  const products: ProductData[] = await getProductsData();

  return (
    <Container>
      <center><h2 className="text-2xl md:text-4xl my-10 font-bold uppercase text-darkOrange">Available Products</h2></center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products?.map((item) => <ProductCard item={item} key={item?._id} />)}
      </div>
    </Container>
  );
};

export default ProductList;

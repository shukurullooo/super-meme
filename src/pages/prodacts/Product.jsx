import { useProduct } from "@/api/hooks/useProduct";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Ditail from "./Ditail";
import Products from "@/components/products/Products";

const Product = () => {
  const { id } = useParams();
  const { getProductById, getProductByCategory } = useProduct();
  const { data: product } = getProductById(id);
  const { data: repellat, isLoading } = getProductByCategory(product?.category);
  const oxshashMaxshulotlar = repellat?.products
    ?.filter((p) => p.id !== product.id)
    ?.slice(0, 4);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div>
      <Ditail product={product} />
      {isLoading ? (
        <div>Loading related products...</div>
      ) : (
        <Products data={oxshashMaxshulotlar} />
      )}
    </div>
  );
};

export default Product;

import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import { Pagination } from "antd";
import React, { useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import shopBg from "@/assets/shopBg.svg";
import ShopSelect from "./ShopSelect/ShopSelect";

const Shop = () => {
  const navigate = useNavigate()
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  // const [page, setPage] = useState(1);
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  

  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    // setPage(page);
    if(pageS !== pageSize){
      params.set("pageSize", pageS)
      params.set("page", "1")
    }else{
      params.set("page", page)
    }
    setParams(params)
  };

  return (
    <div className="px-2 sm:px-4 md:px-8">
      <div className="relative w-full mx-auto">
        <img src={shopBg} alt="" className="w-full h-auto mt-5" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Shop</h1>
          <p className="text-xs sm:text-sm text-[#9F9F9F]">
            Home - Shop
          </p>
        </div>
      </div>
      <div className="mt-4">
        <ShopSelect />
      </div>
      <div className="mt-6">
        <Products data={data?.data?.products} loading={isLoading} count={16} className="" />
      </div>
      <div className="flex justify-center my-6 items-center mt-10">
        <Pagination
          current={Number(page)}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={Number(pageSize)}
          responsive
        />
      </div>
    </div>
  );
};

export default Shop;

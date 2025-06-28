import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";

import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import shopBg from "@/assets/shopBg.svg";
import ShopSelect from "./ShopSelect/ShopSelect";

const Shop = () => {
  const navigate = useNavigate();
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const pageSize = Number(params.get("pageSize")) || 16;
  const skip = (page - 1) * pageSize;

  const { data, isLoading } = getProduct({ limit: pageSize, skip });

  const handleChangePage = (newPage, newPageSize) => {
    if (newPageSize !== pageSize) {
      params.set("pageSize", newPageSize);
      params.set("page", "1");
    } else {
      params.set("page", newPage.toString());
    }
    setParams(params);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="relative w-full mt-5">
        <img src={shopBg} alt="Shop Background" className="w-full h-auto object-cover" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center w-full">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#333]">Shop</h1>
          <p className="text-xs sm:text-sm text-[#9F9F9F]">Home - Shop</p>
        </div>
      </div>

      <div className="mt-6">
        <ShopSelect />
      </div>

      <div className="mt-8">
        <Products data={data?.data?.products} loading={isLoading} count={16} />
      </div>

      <div className="flex justify-center mt-10 mb-16">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
          responsive
          showSizeChanger
          pageSizeOptions={["8", "16", "24", "32"]}
        />
      </div>
    </div>
  );
};

export default Shop;

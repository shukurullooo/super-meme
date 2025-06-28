import React from 'react';
import { useProduct } from '@/api/hooks/useProduct';
import Products from '@/components/products/Products';
import homeBg from "../../assets/home.svg";

const Home = () => {
  const { getProduct } = useProduct();
  const { data, isLoading } = getProduct({ limit: 8 });

  return (
    <div className="w-full">
      <div className="relative w-full mx-auto">
        <img src={homeBg} alt="Home background" className="w-full h-auto mt-5 object-cover" />

        <div
          className="
            absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2 
            z-10 
            w-[85%] sm:w-[440px] md:w-[550px] lg:w-[600px]
            px-4 py-6 sm:py-8
            rounded-[10px] 
            bg-white/70 
            text-center
          "
        >
          <p className="font-semibold text-xs sm:text-sm md:text-base tracking-wide text-gray-700 mb-3">
            New Arrival
          </p>

          <p className="font-bold text-[24px] sm:text-[36px] md:text-[48px] leading-tight text-[#B88E2F] mb-4">
            Discover Our <br /> New Collection
          </p>

          <p className="font-medium text-xs sm:text-sm md:text-base text-[#333333] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <button className="w-[150px] sm:w-[180px] md:w-[222px] h-[48px] sm:h-[60px] md:h-[70px] font-medium text-sm sm:text-base md:text-lg bg-[#B88E2F] text-white rounded hover:opacity-90 transition">
            BUY NOW
          </button>
        </div>
      </div>

      <div className="mt-10 px-4 sm:px-6 md:px-8">
        <Products data={data?.data?.products} loading={isLoading} count={8} />
      </div>

      <div className="flex justify-center my-10">
        <button className="px-6 py-3 bg-[#B88E2F] text-white rounded hover:opacity-90 transition text-sm sm:text-base">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Home;

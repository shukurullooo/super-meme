import { FiFilter } from "react-icons/fi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThLarge } from "react-icons/fa";

const ShopSelect = () => {
  return (
    <div className="con flex flex-wrap items-center justify-between gap-4 px-4 py-4 bg-[#faf5f0] shadow-sm border border-gray-200 text-sm">
      {/* Left */}
      <div className=" flex flex-wrap items-center gap-4">
        {/* Filter */}
        <button className="flex items-center gap-1 text-gray-700">
          <FiFilter className="text-[18px]" />
          <span>Filter</span>
        </button>

        {/* Grid Icons */}
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-200 rounded">
            <BsGrid3X3GapFill className="text-[18px]" />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded">
            <FaThLarge className="text-[18px]" />
          </button>
        </div>

        {/* Showing Text */}
        <span className="text-gray-700 whitespace-nowrap">
          Showing 1–16 of 32 results
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Show */}
        <div className="flex items-center gap-1">
          <span className="text-gray-700">Show</span>
          <input
            type="number"
            value="16"
            className="w-14 px-2 py-1 border rounded text-center text-gray-800"
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-1">
          <span className="text-gray-700">Short by</span>
          <select className="border px-2 py-1 rounded text-gray-800">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopSelect;

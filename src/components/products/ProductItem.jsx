import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";

const ProductItem = (product) => {
  const { title, brand, price, thumbnail } = product;
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <div className="bg-gray-100 group relative">
      <div className="h-[285px] overflow-hidden relative">
        <img
          className="w-full h-full object-contain group-hover:scale-105 duration-300"
          src={thumbnail}
          alt={title}
        />
        <button
          onClick={() => dispatch(toggleWishlist(product))}
          className="absolute top-4 right-4 cursor-pointer bg-white size-7 grid place-items-center  rounded-full"
        >
          {wishlist.some((item) => item.id === product.id) ? (
            <HeartFilled style={{ color: "red" }} />
          ) : (
            <HeartOutlined style={{ color: "gray" }} />
          )}
        </button>
      </div>
      <div className="p-4 leading-8">
        <h3 className="font-bold">{title}</h3>
        <p>{brand}</p>
        <strong className="flex flex-1">{price} USD</strong>
        <br />
        <br />
        <button
          className="w-full bg-[#c89d38] text-white  rounded-md"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
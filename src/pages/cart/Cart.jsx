import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Cart Items */}
        <div className="space-y-6">
          {cart?.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex gap-7  items-center">
                <p className="font-medium text-gray-800">{product.title}</p>
                <p className="text-sm text-gray-500">
                  Price: Rs. {product.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="px-2 py-1 "
                    disabled={product.quantity <= 1}
                    onClick={() => dispatch(decrementCart(product))}
                  >
                    −
                  </button>
                  <span className="bg-gray-200 text-center rounded-[22%] w-[25px]">{product.quantity}</span>
                  <button
                    className="px-2 py-1"
                    onClick={() => dispatch(incrementCart(product))}
                  >
                    +
                  </button>
                <p className="text-sm text-black">
                Rs. {(product.price * product.quantity).toLocaleString()}
                </p>
                  <button
                    className="ml-4 text-red-600"
                    onClick={() => dispatch(removeCart(product))}
                  >
                    deleyt
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Cart Totals */}
        <div className="bg-[#fef9f6] p-6 rounded-xl shadow w-full max-w-sm ml-auto ">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Totals</h2>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg text-gray-800 mb-6">
            <span>Total</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

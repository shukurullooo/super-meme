import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 sm:p-6 md:p-10 min-h-screen bg-gray-50">
      {cart.length ? (
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-4 rounded-xl shadow"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-28 h-28 object-cover rounded"
                />
                <div className="flex-1 flex flex-col gap-2 w-full">
                  <div className="flex justify-between flex-wrap">
                    <p className="font-medium text-gray-800">{product.title}</p>
                    <p className="text-sm text-gray-500">
                      Price: Rs. {product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                      disabled={product.quantity <= 1}
                      onClick={() => dispatch(decrementCart(product))}
                    >
                      −
                    </button>
                    <span className="px-3 py-1 bg-gray-100 rounded">
                      {product.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded"
                      onClick={() => dispatch(incrementCart(product))}
                    >
                      +
                    </button>
                    <p className="ml-auto text-sm text-black">
                      Rs. {(product.price * product.quantity).toLocaleString()}
                    </p>
                    <button
                      className="ml-4 text-red-600"
                      onClick={() => dispatch(removeCart(product))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow h-fit sticky top-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Totals</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-gray-800 mb-6">
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
            <button
              onClick={() => navigate("/chekaut")}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Check Out
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[60vh]">
          <h2 className="text-2xl font-bold text-gray-600">Your cart is empty</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useState } from 'react';
import { Rate } from 'antd';
import Malumot from '../malumot/Malumot';

const Ditail = ({ product }) => {
  if (!product) return <p>Loading...</p>;

  const {
    title,
    price,
    thumbnail,
    images,
    description,
    sku,
    brand,
    category,
    tags,
    availabilityStatus,
    shippingInformation,
    reviews,
    rating
  } = product;

  const [selectedImage, setSelectedImage] = useState(thumbnail);
  const [count, setCount] = useState(1);

  return (
    <div className="pt-[100px] px-4 md:px-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex md:flex-col gap-2">
            {[thumbnail, ...(images || [])].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover border rounded cursor-pointer ${
                  selectedImage === img ? 'border-black' : 'border-gray-200'
                }`}
              />
            ))}
          </div>

          <div className="bg-[#F9F1E7] p-6 rounded-lg">
            <img
              src={selectedImage}
              alt={title}
              className="w-[300px] sm:w-[350px] md:w-[400px] h-auto object-contain mx-auto"
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
          <p className="text-lg text-gray-700 font-medium mb-4">Rs. {price.toLocaleString()}</p>

          <div className="flex items-center gap-2 mb-4">
            <Rate allowHalf disabled defaultValue={rating} />
            <span className="text-sm text-gray-500">
              {reviews?.length || 0} review{reviews?.length !== 1 && 's'}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-6">{description}</p>

          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div className="flex items-center border rounded w-fit">
              <button
                onClick={() => setCount(Math.max(1, count - 1))}
                className="px-3 py-1 text-lg"
              >
                -
              </button>
              <span className="px-4">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-3 py-1 text-lg"
              >
                +
              </button>
            </div>

            <button className="bg-black text-white px-6 py-2 rounded hover:opacity-90 transition">
              Add to Cart
            </button>
            <button className="border px-6 py-2 rounded hover:bg-gray-100 transition">
              + Compare
            </button>
          </div>

          <div className="text-sm text-gray-700 mt-6 space-y-2">
            <p><strong>SKU:</strong> {sku}</p>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Tags:</strong> {tags?.join(', ')}</p>
            <p><strong>Availability:</strong> {availabilityStatus}</p>
            <p><strong>Shipping:</strong> {shippingInformation}</p>
          </div>
        </div>
      </div>

      <Malumot/>
    </div>
  );
};

export default Ditail;

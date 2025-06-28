import React from 'react';
import image from "../../assets/trophy 1.svg";
import image1 from "../../assets/guarantee.svg";
import image2 from "../../assets/shipping.svg";
import image3 from "../../assets/customer-support.svg";

const services = [
  {
    icon: image,
    title: "High Quality",
    desc: "crafted from top materials"
  },
  {
    icon: image1,
    title: "Warranty Protection",
    desc: "Over 2 years"
  },
  {
    icon: image2,
    title: "Free Shipping",
    desc: "Order over 150 $"
  },
  {
    icon: image3,
    title: "24 / 7 Support",
    desc: "Dedicated support"
  },
];

const Malumot = () => {
  return (
    <div className="bg-[#F9F1E7] py-10 px-4 sm:px-6 md:px-10 mt-16 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((item, idx) => (
          <div key={idx} className="flex items-start sm:items-center gap-4">
            <img src={item.icon} alt={item.title} className="w-10 h-10 sm:w-12 sm:h-12" />
            <div>
              <p className="text-base font-semibold text-[#333]">{item.title}</p>
              <p className="text-sm text-[#9F9F9F]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Malumot;

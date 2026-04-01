import React from "react";

const ToggleTabs = ({ activeTab, setActiveTab}) => {
  return (
    <div className="mt-16">

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 pt-12">
        <h1 className="font-extrabold text-4xl lg:text-5xl text-[#101727]">
          Premium Digital Tools
        </h1>

        <p className="text-[#627382] text-base pt-3">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Tabs */}
      <div className="flex justify-center items-center">
        <div className="bg-base-200 p-2 rounded-full flex gap-2 shadow-md">

          {/* Products Button */}
          <button
            onClick={() => setActiveTab("products")}
            className={`px-7 py-4 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "products"
                ? "bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white!"
                : "text-gray-600 hover:bg-base-300"
            }`}
          >
            Products
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-7 py-4 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "cart"
                ? "bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white!"
                : "text-gray-600 hover:bg-base-300"
            }`}
          >
            Cart ()
          </button>

        </div>
      </div>
    </div>
  );
};

export default ToggleTabs;
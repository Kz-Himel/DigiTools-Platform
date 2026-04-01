import React from "react";

const Card = ({ item }) => {
  
  const getTagStyles = (type) => {

    // Badg Style
    switch (type?.toLowerCase()) {
      case "new":
        return "bg-green-200 text-green-600 border-[#86EFAC]";
      case "popular":
        return "bg-purple-200 text-purple-600 border-purple-600";
      case "best seller":
        return "bg-orange-200 text-orange-600 border-orange-300";
      default:
        return "bg-[#F3F4F6] text-[#374151] border-[#D1D5DB]";
    }
  };

  return (
    <div className="card bg-white shadow-sm border-2 border-transparent hover:border-[#9514fa] transition-all duration-300 rounded-[24px] h-full">
      <div className="card-body p-7">
        
        {/* Badge Section with your TagType Logic */}
        <div className="flex justify-end">
          <span className={`px-3 py-1 rounded-full text-[12px] font-bold border uppercase ${getTagStyles(item.tagType)}`}>
            {item.tagType}
          </span>
        </div>

        {/* Icon Section */}
        <div className="p-4 border border-neutral-100 rounded-full w-fit bg-gray-50">
          <img 
            className="h-10 w-10 object-contain" 
            src={`https://api.dicebear.com/7.x/shapes/svg?seed=${item.name}`} 
            alt={item.name} 
          />
        </div>

        {/* Content Section */}
        <div className="space-y-2 mt-4">
          <h2 className="text-3xl font-bold text-slate-800">{item.name}</h2>
          <p className="line-clamp-2 text-base text-neutral-400">
            {item.description}
          </p>
          <p className="text-2xl font-medium">
            ${item.price}/
            <span className="text-xl text-neutral-500">{item.period}</span>
          </p>
        </div>

        {/* Features List */}
        <ul className="mt-6 flex flex-col gap-2 flex-grow">
          {item.features.map((feat, index) => (
            <li key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-success flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base text-slate-600">{feat}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="mt-8">
          <button className="btn border-0 btn-block rounded-full text-white bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r transition-all font-bold">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
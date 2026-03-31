import React from "react";
import BannerImg from "../../assets/banner.png";
import { LucidePlay } from "lucide-react";
import DotImg from "../../assets/dot.svg";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-16 mb-20 lg:mt-24 lg:mb-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="hero-left flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start bg-primary-content w-fit mx-auto lg:mx-0 rounded-full py-2 px-5 text-base mb-6">
              <img src={DotImg} alt="dot" className="w-4 h-4" />
              <p className="pl-3 bg-gradient-to-r from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent font-medium">
                New: AI-Powered Tools Available
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#101727] leading-tight">
              Supercharge Your <br className="hidden sm:block" />
              Digital Workflow
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-[#627382] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button className="btn btn-primary rounded-full bg-gradient-to-r from-[#9514fa] to-[#4f39f6] hover:from-[#4f39f6] hover:to-[#9514fa] text-base font-medium py-6 px-8 transition-all">
                Explore Products
              </button>
              
              <button className="btn btn-outline btn-primary rounded-full text-base font-medium py-6 px-8 flex items-center justify-center gap-2 transition-all">
                <LucidePlay className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hero-right flex-1 w-full flex justify-center lg:justify-end">
            <img 
              src={BannerImg} 
              alt="Banner" 
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
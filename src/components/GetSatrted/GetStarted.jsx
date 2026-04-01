import React from "react";
import { LucideBox, LucideRocket, LucideUser } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] pb-30 pt-30">
      <div className="container mx-auto p-2">
        <div className="text-center flex gap-4 flex-col">
          <h1 className="font-extrabold text-4xl lg:text-5xl text-[#101727]">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382] text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="card card-border bg-base-100 shadow-md">
            <div className="flex justify-end">
              <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] m-4 p-2 w-10 h-10 rounded-full">
                <p className="text-white text-center">01</p>
              </div>
            </div>
            <div className="card-body text-center items-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit">
                <LucideUser size={64} color="#9514FA" />
              </div>
              <h2 className="card-title text-2xl">Create Account</h2>
              <p className="mb-22 text-base text-neutral-500">
                Sign up for free in seconds. No credit card
                <br /> required to get started.
              </p>
            </div>
          </div>
          <div className="card card-border bg-base-100 shadow-md">
            <div className="flex justify-end">
              <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] m-4 p-2 w-10 h-10 rounded-full">
                <p className="text-white text-center">02</p>
              </div>
            </div>
            <div className="card-body text-center items-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit">
                <LucideBox size={64} color="#9514FA" />
              </div>
              <h2 className="card-title text-2xl">Choose Products</h2>
              <p className="mb-22 text-base text-neutral-500">
                Browse our catalog and select the tools
                <br />
                that fit your needs.
              </p>
            </div>
          </div>
          <div className="card card-border bg-base-100 shadow-md">
            <div className="flex justify-end">
              <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] m-4 p-2 w-10 h-10 rounded-full">
                <p className="text-white text-center">03</p>
              </div>
            </div>
            <div className="card-body text-center items-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit">
                <LucideRocket size={64} color="#9514FA" />
              </div>
              <h2 className="card-title text-2xl">Start Creating</h2>
              <p className="mb-22 text-base text-neutral-500">
                Download and start using your premium <br />
                tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
import React from 'react';

const Stats = () => {
    return (
        <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] p-15 ">
      <div className="container mx-auto justify-between grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3  justify-between mx-auto">
          <h3 className="text-6xl font-bold text-white text-center">50K+</h3>
          <p className="text-2xl font-medium text-white text-center">
            Active Users
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-between mx-auto">
          <h3 className="text-6xl font-bold text-white text-center">200+</h3>
          <p className="text-2xl font-medium text-white text-center">
            Premium Tools
          </p>
        </div>
        <div className="flex flex-col gap-3  justify-between mx-auto">
          <h3 className="text-6xl font-bold text-white text-center">4.9</h3>
          <p className="text-2xl font-medium text-white text-center">Rating</p>
        </div>
      </div>
    </div>
    );
};

export default Stats;
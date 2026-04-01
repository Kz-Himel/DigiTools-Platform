import React from 'react';

const ReadyToTransfrom = () => {
    return (
        <div>
            <div>
        <div className="bg-base-200 bg-linear-to-l from-[#9514fa] to-[#4f39f6] py-20">
          <div className="container mx-auto text-center space-y-4 p-2">
            <h1 className="font-extrabold text-4xl lg:text-5xl text-white">
              Ready To Transform Your Workflow?
            </h1>
            <p className="py-6 text-neutral-200">
              Join thousands of professionals who are already using Digitools to
              work smarter.
              <br />
              Start your free trial today.
            </p>
            <div className=" flex gap-4 justify-center">
              <button className="btn bg-white border-0 text-purple-500 rounded-full">
                Explore Products
              </button>
              <button className="btn btn-outline hover:bg-purple-500  text-white rounded-full">
                Get Started
              </button>
            </div>
            <p className="text-neutral-200">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ReadyToTransfrom;
import React from "react";

const Footer = () => {
  return (
    <div className="pt-30 bg-[#101727]">
      <div className="container mx-auto">
        <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content p-5">
          <div>
            <h6 className="text-4xl text-white font-bold">DigiTools</h6>
            <p>
              Premium digital tools for creators,
              <br /> professionals, and businesses. Work smarter
              <br /> with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </div>
          <div>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </div>
          <div>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div>
            <h6 className="footer-title">Social Links</h6>
            <div className="grid grid-flow-col gap-4">
              <a className="bg-white p-2 rounded-full text-black hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.433 4 20 5.567 20 7.75v8.5C20 18.433 18.433 20 16.25 20h-8.5C5.567 20 4 18.433 4 16.25v-8.5C4 5.567 5.567 4 7.75 4zm4.25 2.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.504 3.504 0 0 1 12 8.5zm5.25-2.25a1.25 1.25 0 1 0 1.25 1.25A1.252 1.252 0 0 0 17.25 6.25z"/>
                </svg>
              </a>
              <a className="bg-white p-2 rounded-full text-black hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M13 22v-9h3l1-4h-4V7c0-1.03.47-2 2-2h2V2.14C16.61 2.05 15.3 2 14 2c-3 0-5 1.79-5 5v3H6v4h3v9h4z"/>
                </svg>
              </a>
              <a className="bg-white p-2 rounded-full text-black hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.35-7.02L3.5 22H1l7.02-8.02L2 2h6.828l4.88 6.42L18.244 2zm-2.396 18h1.9L8.16 4h-2L15.848 20z"/>
              </svg>
              </a>
            </div>
          </div>

        </footer>

        <hr className="text-gray-400 text-xl my-7"/>

        <div className="container mx-auto flex justify-between p-5">
          <div>
            <p className="text-neutral-400">
              © 2026 Digitools. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 text-neutral-400">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1F2937"
            fillOpacity="1"
            d="M0,64L0,64L144,64L144,96L288,96L288,192L432,192L432,96L576,96L576,0L720,0L720,128L864,128L864,224L1008,224L1008,160L1152,160L1152,32L1296,32L1296,96L1440,96L1440,320L1296,320L1296,320L1152,320L1152,320L1008,320L1008,320L864,320L864,320L720,320L720,320L576,320L576,320L432,320L432,320L288,320L288,320L144,320L144,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-gray-800 w-screen pb-16 md:pb-0">
        <div className="px-4 md:w-1/2 md:mx-auto">
          <div className="text-white py-10 text-center">
            <p className="pb-5">Designed and Developed By</p>
            <div className="h-1 border-2 border-white border-dotted"></div>
            <div className="flex justify-between py-3">
              <FaFacebook />
              <FaTwitter />
              <FaTiktok />
              <FaYoutube />
            </div>
            <div className="h-1 border-2 border-white border-dotted"></div>
            <p className="pt-5">Lok Kru DARO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

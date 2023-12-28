import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../../images/playstore.png";

export const Footer = () => {
  return (
    <footer className="px-2 sm:px-0">
      <div className="w-full h-auto bg-gray-100">
        <div className="container mx-auto py-4">
          <div className="grid gap-5  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="">
              <h1 className="text-2xl text-green-900 font-semibold">
                Chirag Infosys
              </h1>
              <div className="space-y-2 mt-2">
                <p className="font-medium text-base">Contact Us</p>
                <div className="flex space-x-2">
                  <p className="text-2xl text-green-900">
                    <AiOutlineWhatsApp />
                  </p>
                  <div className="text-sm">
                    <p>WhatsApp</p>
                    <p>+91 98253 58858</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <p className="text-2xl text-green-900">
                    <AiOutlinePhone />
                  </p>
                  <div className="text-sm">
                    <p>Call Us</p>
                    <p>+91 98253 58858</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <p className="text-2xl text-green-900">
                    <AiOutlineMail />
                  </p>
                  <div className="text-sm">
                    <p>Email Us</p>
                    <p>chiragin@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-base text-green-900 font-medium">
                Products
              </h1>
              <div className="flex flex-col mt-4 font-normal">
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                Popular Products
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                Laptop Brands
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                 Desktop Brands
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                Accessories
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Peripherals Parts
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                camera Brands
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Printer Devices
                </Link>
              </div>
            </div>
            <div className="">
              <h1 className="text-base text-green-900 font-medium">
                Customer Services
              </h1>
              <div className="flex flex-col mt-4 font-normal">
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  FAQ
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  E-waste Policy
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Concellation & Return Policy
                </Link>
              </div>
            </div>
            <div className="">
              <h1 className="text-base text-green-900 font-medium">
                Download App
              </h1>
              <div>
                <img src={image} className="max-w-full h-12" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

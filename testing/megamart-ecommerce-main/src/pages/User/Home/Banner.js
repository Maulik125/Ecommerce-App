import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="container mx-auto mt-1 sm:mt-5">
      <div className="md:flex md:gap-5">
        <div className="bg-gray-100 p-3 rounded-xl hidden lg:block w-full min-w-[280px]  h-80">
          <ul className="space-y-5">
            <li className="text-gray-600 text-xl hover:text-orange-600 hover:bg-red-100/40 px-2 rounded-md group duration-300 ease-out">
              <Link to="/" className="flex justify-between items-center">
                <span>Laptop Brands</span>
                <span className="hidden group-hover:block">
                  <FaArrowRight />
                </span>
              </Link>
            </li>
            <li className="text-gray-600 text-xl hover:text-orange-600 hover:bg-red-100/40 px-2 rounded-md group duration-300 ease-out">
              <Link to="/" className="flex justify-between items-center">
                <span>Desktop Brands</span>
                <span className="hidden group-hover:block">
                  <FaArrowRight />
                </span>
              </Link>
            </li>
            <li className="text-gray-600 text-xl hover:text-orange-600 hover:bg-red-100/40 px-2 rounded-md group duration-300 ease-out">
              <Link to="/" className="flex justify-between items-center">
                <span>Printer Brands</span>
                <span className="hidden group-hover:block">
                  <FaArrowRight />
                </span>
              </Link>
            </li>
            <li className="text-gray-600 text-xl hover:text-orange-600 hover:bg-red-100/40 px-2 rounded-md group duration-300 ease-out">
              <Link to="/" className="flex justify-between items-center">
                <span>Camera Brands</span>
                <span className="hidden group-hover:block">
                  <FaArrowRight />
                </span>
              </Link>
            </li>
            <li className="text-gray-600 text-xl hover:text-orange-600 hover:bg-red-100/40 px-2 rounded-md group duration-300 ease-out">
              <Link to="/" className="flex justify-between items-center">
                <span>Peripherals Parts</span>
                <span className="hidden group-hover:block">
                  <FaArrowRight />
                </span>
              </Link>
            </li>
            <li className="text-gray-600 text-xl hover:text-orange-600 hover:bg-red-100/40 px-2 rounded-md group duration-300 ease-out">
              <Link to="/" className="flex justify-between items-center">
                <span>Accessories</span>
                <span className="hidden group-hover:block">
                  <FaArrowRight />
                </span>
              </Link>
            </li>
            </ul>
        </div>
        {/* carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          <div>
            <img
              loading="lazy"
              className="w-full object-fill rounded-xl h-32 sm:h-52 md:h-80"
              src="images/irvine_memory.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="w-full object-fill rounded-xl h-32 sm:h-52 md:h-80"
              src="images/laptop2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="w-full object-fill rounded-xl h-32 sm:h-52 md:h-80"
              src="images/repair12.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="w-full object-fill rounded-xl h-32 sm:h-52 md:h-80"
              src="images/gaming3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="w-full object-fill rounded-xl h-32 sm:h-52 md:h-80"
              src="images/canon_printer1.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="w-full object-fill rounded-xl h-32 sm:h-52 md:h-80"
              src="images/wd-240.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="w-full object-fill rounded-xl h-32 sm:h-52 md:h-80"
              src="images/images (1).jpeg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

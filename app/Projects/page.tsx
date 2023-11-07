"use client";
import React from "react";
import Qkart from "../../assets/qkart.png";
import Image from "next/image";
import Xflix from "../../assets/xflix.png";
import Xbord from "../../assets/xboard.png";
import Qtrip from "../../assets/qtrip.png";
import Qtify from "../../assets/qtify.png";
import { motion } from "framer-motion";

function page() {
  return (
    <div className=" mt-10">
      <div className="flex justify-center flex-wrap">
        < motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -50 }}
        transition={{ duration: 1 }}
        >
          <div>
            <p>my projects</p>
            <h1 className=" text-4xl font-extrabold">
              Work that I've <br /> done in the <br /> past
            </h1>
            <div className=" border-dashed mt-5  border-2 border-black"></div>
          </div>
          <div className="mt-5 mb-10">
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-72 h-56 border border-gray-400 rounded-xl ">
                <Image
                  src={Qkart}
                  alt="qkart"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:rounded-xl transition-opacity duration-300 bg-black bg-opacity-70">
                  <div className="text-white m-5">
                    <h2 className="text-lg font-semibold">Qkart</h2>
                    <p className="text-xs">
                      QKart is an e-commerce application offering a variety of
                      products for customers to choose from.{" "}
                    </p>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        React
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Debouncing
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Material UI Grid
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        node.js
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Express
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Mongo DB
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="https://github.com/MayurCode2/Qkart-shopping-app"
                        className="text-sm text-white"
                        target="_blank"
                      >
                        Github
                      </a>
                      <a
                        href="https://shopping-qkart-app.netlify.app"
                        className="text-sm text-white "
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-10">
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-72 h-56 border border-gray-400 rounded-xl ">
                <Image
                  src={Xflix}
                  alt="qkart"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:rounded-xl transition-opacity duration-300 bg-black bg-opacity-70">
                  <div className="text-white m-5">
                    <h2 className="text-lg font-semibold">Xflix</h2>
                    <p className="text-xs">
                      XFlix is a video sharing platform It also features
                      uploading new videos by using external video links and
                      playing these videos.{" "}
                    </p>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        React
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Controlled Components
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Material UI
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        node.js
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Express
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                        Mongo DB
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="https://github.com/MayurCode2/xflix"
                        className="text-sm text-white"
                        target="_blank"
                      >
                        Github
                      </a>
                      <a
                        href="https://xfilxvideo.netlify.app"
                        className="text-sm text-white "
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 50 }}
        transition={{ duration: 1 }}
         className=" mx-4 ">
          
        <div className="mt-5 mb-10">
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-72 h-56 border border-gray-400 rounded-xl ">
                <Image
                  src={Xbord}
                  alt="qkart"
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:rounded-xl transition-opacity duration-300 bg-black bg-opacity-70">
                  <div className="text-white m-5">
                    <h2 className="text-lg font-semibold">XBoard</h2>
                    <p className="text-xs">
                    XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.
                    </p>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      HTML

                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      CSS
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      Bootstrap
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      JavaScript
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      DOM Manipulation
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      Bootstrap
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="https://github.com/MayurCode2/Qkart-shopping-app"
                        className="text-sm text-white"
                        target="_blank"
                      >
                        Github
                      </a>
                      <a
                        href="https://samachar-xboard.netlify.app/"
                        className="text-sm text-white "
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="mt-5 mb-10">
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-72 h-56 border border-gray-400 rounded-xl ">
                <Image
                  src={Qtrip}
                  alt="qkart"
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:rounded-xl transition-opacity duration-300 bg-black bg-opacity-70">
                  <div className="text-white m-5">
                    <h2 className="text-lg font-semibold">QTripDynamic</h2>
                    <p className="text-xs">
                    QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. 
                    </p>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      Conditional Rendering
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      Bootstrap Carousel
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      Event Handling
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      ES6
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      localStorage
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      HTTP
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="https://github.com/MayurCode2/Qtrip"
                        className="text-sm text-white"
                        target="_blank"
                      >
                        Github
                      </a>
                      <a
                        href="https://qtrip-dynamic-frontended.netlify.app/"
                        className="text-sm text-white "
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" lg:mt-40 md:mt-3  border-dashed  border-2 mb-4 border-black"></div>
          </div>
        </motion.div>

        < motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -50 }}
        transition={{ duration: 1 }}
         className=" g lg:pt-12 sm:pt-0">
          <div className=" border-dashed  border-2 mb-4 border-black"></div>
          
          <div className="mt-5 mb-10">
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-72 h-56 border border-gray-400 rounded-xl ">
                <Image
                  src={Qtify}
                  alt="qkart"
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:rounded-xl transition-opacity duration-300 bg-black bg-opacity-70">
                  <div className="text-white m-5">
                    <h2 className="text-lg font-semibold">Qtify</h2>
                    <p className="text-xs">
                    Qtify is a powerful and intuitive music streaming application, designed to provide an exceptional listening experience for music enthusiasts.
                    </p>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      react
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      tailwindcss
                      </p>
                    </div>
                    <div className="flex">
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                    flexbox
                      </p>
                      <p className=" backdrop-blur-sm backdrop-brightness-50 px-2 py-1 m-1 rounded-full text-xs">
                      
                      </p>
                    </div>
                    
                    <div className="flex justify-between">
                      <a
                        href="https://github.com/MayurCode2/Qtify"
                        className="text-sm text-white"
                        target="_blank"
                      >
                        Github
                      </a>
                      <a
                        href="https://qtifymayur.netlify.app"
                        className="text-sm text-white "
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-10">
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-72 h-56 border border-gray-400 rounded-xl ">
               
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:rounded-xl transition-opacity duration-300 bg-black bg-opacity-70">
                  <div className="text-white m-5">
                    <h2 className="text-lg font-semibold">Coming soon...</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default page;

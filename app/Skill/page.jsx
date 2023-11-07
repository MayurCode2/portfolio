"use client"

import React from "react";

import Image from "next/image";
import Tailwind from "../../assets/icons/tailwind-css-icon.png";
import Materil from "../../assets/icons/logo.png";
import Reactjs from "../../assets/icons/atoms.png";
import Javascript from "../../assets/icons/java-script.png";
import nodejs from "../../assets/icons/nodejs.png";
import Git from "../../assets/icons/git.png";
import Github from "../../assets/icons/github.png";
import Postman from "../../assets/icons/download.png";
import Web from "../../assets/icons/webpack-icon.webp";
import { motion } from "framer-motion";

function page() {
  return (
    <div className=" mb-8">
      <div className="text-center">
        <p>Explore My</p>
        <h1 className="text-3xl ">My Expertise</h1>
      </div>

      <div className=" flex justify-center flex-wrap">
        <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 50 }}
        transition={{ duration: 1 }}
         className=" mr-5 mt-4">
          <div className=" text-center mb-4">
            <h1 className=" text-3xl font-extrabold">Design</h1>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-10 h-10 mr-5">
              <Image src={Tailwind} className=" object-contain w-full h-full" />
            </div>
            <div className="w-10 h-10">
              <Image src={Materil} className=" object-contain w-full h-full" />
            </div>
          </div>

          <div className=" text-center">
            <p>
              I value simple content structure, clean design <br /> patterns,
              and thoughtful interactions
            </p>
            <br />
            <p>
            
              enjoy developing and designing UI using <br />
              <strong> HTMLS, CSS & SCSS ,</strong> <br />
              and also using different UI Component Libraries <br /> like <br />
              <strong> Materail UI and Chakra UI</strong>
            </p>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 50 }}
        transition={{ duration: 1 }}

        >
          <div className=" text-center mb-4 mt-4">
            <h1 className=" text-3xl font-extrabold">Code</h1>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-10 h-10 mr-5">
              <Image src={Reactjs} className=" object-contain w-full h-full" />
            </div>
            <div className="w-10 h-10">
              <Image
                src={Javascript}
                className=" object-contain w-full h-full"
              />
            </div>

            <div className="w-10 h-10 ml  ml-5">
              <Image src={nodejs} className=" object-contain w-full h-full" />
            </div>
          </div>
          <div className=" text-center">
            <p>
              I like to code things from scratch, and enjoy <br /> bringing
              ideas to life in the browser and software
            </p>
            <br />
            <p>
              Highlyskilled in using <br />
              <strong> JavaScript, ReactJs, NextJS, Redux, </strong> <br /> and
              building frontend and <br />
              <strong> NodeJs, ExpressJs, WebSockets</strong> in <br /> Backend
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 50 }}
      transition={{ duration: 1 }}
      >
      <div>
          <div className=" text-center mb-4">
            <h1 className=" text-3xl mt-5 font-extrabold">Tool</h1>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-10 h-10 mr-5">
              <Image src={Git} className=" object-contain w-full h-full" />
            </div>
            <div className="w-10 h-10">
              <Image
                src={Github}
                className=" object-contain w-full h-full"
              />
            </div>

            <div className="w-10 h-10 ml  ml-5">
              <Image src={Web} className=" object-contain w-full h-full" />
            </div>
            <div className="w-10 h-10 ml  ml-5">
              <Image src={Postman} className=" object-contain w-full h-full" />
            </div>
          </div>
          <div className=" text-center">
            <p>
            For easily collabrative & building robust system <br /> and development, I have worked and used <br />
<strong> GIT, Github, Jenkins ,Postman </strong> for source code <br /> management and deployment purposes
            </p>
            <br />
            <p>
            Worked with <strong> Gulp, Webpack and Gradle </strong> for fast, <br /> optimised bundling of source code and making <br /> build process roboust
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default page;

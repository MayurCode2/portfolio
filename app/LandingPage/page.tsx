
"use client";
import React from "react";
import profile from "../../assets/profile-pic.png";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState,useRef,useEffect } from "react";
import Avatar from "../../assets/icons/me-vector.svg"
import Lottie from "lottie-react";
import animationData from "../../animetion/Animation - 1698636150097.json"
import "./index.css"
function Pages() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Create a ref for the modal element
  const modalRef = useRef<HTMLDivElement | null>(null); // Specify the correct type

  // Function to close the modal when clicking outside of it
  const closeModalOnClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  // Add an event listener to the document
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", closeModalOnClickOutside);
    } else {
      document.removeEventListener("mousedown", closeModalOnClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", closeModalOnClickOutside);
    };
  }, [isModalOpen]);


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  
  return (
 
<div className="container">
            <div className="blob-container">
                <div className="blob"></div>
                <div className="blob one"></div>
                <div className="blob two"></div>
                <div className="blob three"></div>
                <div className="blob four"></div>
                <div className="blob five"></div>
                <div className="blob six"></div>
                <div className="blob seven"></div>
                <div className="blob eight"></div>
                <div className="blob nine"></div>
                <div className="blob ten"></div>
            </div>

            <section>
                <div className="mb-24">
                    <div>
                        <div className="box flex flex-col ">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 40,
                                    duration: 0.3,
                                    whileHover: { scale: 1.1 },
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001,
                                    },
                                }}
                                className=" flex justify-center items-center mr-6 "
                            >
                                <Image src={Avatar} alt="profile" className="w-80 h-80" />
                            </motion.div>

                            <div className="flex justify-center items-center flex-col mt-8 text-center">
                                <motion.p
                                    initial={{ opacity: 0, translateX: 50 }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    exit={{ opacity: 0, translateY: -50 }}
                                    transition={{ duration: 1 }}
                                >
                                    Hello , Im
                                </motion.p>
                                <h1 className="nameHead text-4xl font-extrabold fon">Mayur Patil</h1>
                                <motion.div
                                    initial={{ opacity: 0, translateY: 50 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    exit={{ opacity: 0, translateY: -50 }}
                                    transition={{ duration: 1 }}
                                    className="text-2xl font-semibold text-gray-500"
                                >
                                    <div className="flex flex-row justify-center ">
                                        <div>&apos;👩‍🚀 The Frontend Speedster&apos;</div>
                                        <div className="w-6 h-6">
                                            <Lottie animationData={animationData} loop={true} autoPlay={true} />
                                        </div>
                                    </div>
                                    &apos;🏎️ Master of Fast Website Wizardry 💨&apos;
                                    <br />
                                    &apos;🏔️Turning pixels into pure magic!🪄&apos;
                                </motion.div>
                                <div className="m-3">
                                    <motion.button 
                                        onClick={() => setIsModalOpen(true)}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className="border px-10 py-3 rounded-3xl mr-2 border-slate-600"
                                    >
                                        About
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                className="bg-white p-8 rounded-lg shadow-lg text-center"
                            >
                                {/* Modal Content */}
                                <h2>About me</h2>
                                <p>
                                    I&apos;m Mayur Patil🧔,<br /> a 21-year-old Indian🇮🇳 Full-Stack Developer👨‍💻.
                                    <br /> I love crafting web experiences that captivate and inspire. <br />
                                    From solving design challenges to building smart user interfaces, <br /> I bring innovation and creativity to every project. <br />
                                    Let&apos;s create something amazing together! <br />
                                    &apos;🙋 Available for freelance projects&apos;
                                </p>
                                
                                <a href="https://drive.google.com/file/d/1tY2_FS5lcziGlKJZNDlHJ6ZXNQNTYDHi/view?usp=sharing" target="_blank">
                                    <div className="w-24 h-10 bg-slate-700 pt-2 rounded-xl">
                                        <h1 className="text-center text-white">Resume</h1>
                                    </div>
                                </a>
                                
                                <button onClick={() => setIsModalOpen(false)}>Close</button>
                            </motion.div>
                        </div>
                    )}
                </div>
            </section>
        </div>
   
  );
}

export default Pages;





 
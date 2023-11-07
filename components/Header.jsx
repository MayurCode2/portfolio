
"use client";
import React from 'react'

import Link from 'next/link'
import {motion} from 'framer-motion'

function Header() {
 

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <div>
       <div className=" static flex justify-around mb-10 border-b py-3 border-gray-700 shadow-md" >
        <div><h1 className=' text-4xl uppercase font-extrabold'><Link href="/">.Mayur</Link></h1></div>
        <div className="">
          <ul className=" md:flex hidden">
            <motion.li
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 0.9 }}
              
             className="mx-3"><Link href="/Skill">Skill</Link></motion.li>
            <motion.li
            whileHover={{ scale: 1.8 }}
             className="mx-3"> <Link href="/Projects">Project</Link></motion.li>
            <motion.li
            whileHover={{ scale: 1.8 }}
             className="mx-3"> <Link href="/Contact">Contact</Link></motion.li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
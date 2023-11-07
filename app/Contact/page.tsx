import React from 'react'
import Lindin from '../../assets/icons/linkedin.png'
import Image from 'next/image'
import Instagarm from '../../assets/icons/instagram.png'
import Email from '../../assets/email.png'
import Github from '../../assets/github.png'


function page() {
  return (
    <div className=' bg-slate-400 h-96'>
<div className='flex flex-col justify-center items-center pt-10'>
  <h1 className=' text-center  font-extrabold text-white pb-5 text-3xl'>Mayur.</h1>
  <p className=' text-white text-center text-2xl font-thin'>Living, learning, & leveling <br/> up one day at a time.</p>
</div>
<div>
<div className=' flex justify-center items-center mt-10  '>
  <div>
    <a href='https://www.linkedin.com/in/mayur-patil2205/' target='_blank'>
    <Image src={Lindin} alt="Picture of the author"
    className=' mr-4 hover:h-12 hover:w-12 h-10 w-10'
     />
     </a>
  </div>
  <div>
    <a href='https://www.instagram.com/mayurpatil2205/' target='_blank'>
    <Image src={Instagarm} alt="Picture of the author"
    className=' mr-4 hover:h-12 hover:w-12 h-10 w-10'
     />
     </a>
  </div>
  <div >
    <a href='mailto:mpmayur2251998@gmail.com' target='_blank'>
    <Image src={Email} alt="Picture of the author"
    className=' mr-4 hover:h-12 hover:w-12 h-12 w-12'
     />
     </a>
  </div>
  <div>
    <a href='https://github.com/MayurCode2' target='_blank'>
    <Image src={Github} alt="Picture of the author"
    className=' mr-4 hover:h-12 hover:w-12 h-10 w-10'
     />
     </a>
  </div>

  </div>
  <div className=' text-center mt-10'><h1>Handcrafted by me © twentytwentythree</h1></div>
</div>


    </div>
  )
}

export default page









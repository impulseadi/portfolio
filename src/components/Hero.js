import React, { useEffect, useState } from 'react'
import Video from './banner2.mp4'
import VariableText from './VariableText'
import HeroBg from './HeroBg'

const Hero = () => {

 
 const text="Crafting Digital Identities, One Website at a Time"
    
  


  return (

    <div className='relative w-[100%] h-[100%]'>

    {/* back */}

    <div className='absolute z-10  text-yellow-100 w-[100%] flex justify-center items-start h-[100%] '>

    <HeroBg/>

       





    </div>

    {/* main */}

   


    <div className=' flex h-[200vh] z-20 bg-transparent w-[80%] flex-col justify-between m-auto'>
    {/* left */}
    <div className='flex  flex-col justify-around w-[100%] h-[100vh]   py-[100px]' >

   

    {/* for cursive test */}

    <div className='text-purple-500 z-30 text-[40px] italic font-medium'>

    Want websites according to your custom needs then you are at right destination
    </div>

    

      <div className='justify-start flex'>

      <div className='font-serif z-30 leading-10 text-center border-[2px] border-gray-400 justify-start flex p-3 text-[20px] text-white'>

      We specialize in creating custom-designed, responsive websites tailored to meet your unique business requirements. Our team of experienced developers is dedicated to delivering user-friendly, visually appealing websites that reflect your brand's essence.
      </div>

      </div>



    </div>

    {/* right */}

    <div className='flex  w-[105%] h-[100vh] rounded-[10px] justify-center items-center ' >

    {/* <Video/> */}

    <video
            className="rounded-[10px]  shadow-[20px_20px_rgba(120, 120, 120)]"
            muted
            loop
            style={{ width: '100%', height: 'auto' }}
        
            autoPlay
          >
            <source src={Video} type="video/mp4" />
          </video>

    </div>


      
    </div> 
    
    
    </div>
  )
}

export default Hero

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils'


const Hero = () => {
  const [videoSrc,setVideoSrc] = useState(window.innerWidth<760? smallHeroVideo : heroVideo)
  const handler = ()=>{
    if(window.innerWidth<760){
      setVideoSrc(smallHeroVideo) 
    }
    setVideoSrc(heroVideo)
  }

  useEffect(()=>{
    window.addEventListener('resize',handler)

    return ()=>{
      window.removeEventListener('resize',handler)


    }
  },[])

  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      delay:1.5,
      


    }),
    gsap.to('#cta',{
      opacity:1,
      delay:2,
      y:-50

    })
  },[] )
  return (
    <section className ="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
      <p  id ="hero" className ="hero-title">
        Iphone 15 Pro
      </p>
      <div className='md:w-10/12  w-9/12 '>
       <video  muted playsInline={true} key={videoSrc}  autoPlay>
        <source src ={videoSrc} type="video/mp4"/>
       </video>


      </div>

      </div>
      <div id ="cta" className ="flex flex-col items-center opacity-0 translate-y-20">
        <a href ="#highlight" className='btn'>
          Buy 

        </a>
        <p className="font-normal text-xl">From ₹129800.00</p>
      </div>
         
    </section>
  )
}

export default Hero
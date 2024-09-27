// import React from 'react'
import footerImg from '../assets/sex-education1-1@2x.png'

const Footer = () => {
  return (
    <div className='mb-10'>
        <div className='relative'>
            <p className="font-inter text-white text-3xl footer">
                Always seek accurate information, respect your boundaries and others',and <br />
                remember that asking questions is the key to understanding and making <br /> healthy choices.
            </p>
            <img src={footerImg} alt="" className='w-60 h-12 absolute right-2'/>
        </div>
        <br />
        <br />
        <br />
        <p className='text-center text-xl font-semibold'>© Copyright Nexisa All Rights Reserved</p>
    </div>
  )
}

export default Footer
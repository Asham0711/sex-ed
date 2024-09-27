// import React from 'react'
import anatomyHead from '../assets/sex-education-5@2x.png'

const AnatomyHeader = () => {
  return (
    <div className='flex font-acme gap-6'>
        <div className='w-[65%]'>
            <h1 className="text-[#FC1E00] text-3xl font-extrabold">
                Anatomy and Reproduction
            </h1>
            <br />
            <br />
            <p>
                As you go through puberty, your body undergoes various physical changes, many of which are tied to your reproductive system. Understanding how your body works, especially the male and female reproductive systems, is key to making informed choices about your health and well-being. This guide covers the basics of both systems and the changes you can expect during adolescence.
            </p>
        </div>
        <div className='w-[35%] flex justify-center items-center'>
            <img src={anatomyHead} alt="homeHeader" className='h-64'/>
        </div>
    </div>
  )
}

export default AnatomyHeader
// import React from 'react'
import teamwise from '../assets/sex-education1-1@2x.png'
import headerImg from '../assets/sex-education-4-1@2x.png'

const Header = () => {
  return (
    <div className="max-w-screen container mx-auto p-4 mt-12 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl">
        <div className='p-5'>
            <img src={teamwise} alt="teamwise" className='w-40 h-10'/>
        </div>
        <div className='flex w-11/12 mx-auto gap-8'>
            <div className='w-[40%] flex items-center'>
                <h1 className='font-bold text-3xl'>
                    Helping teens navigate puberty, relationships, and self-discovery with trusted information.
                </h1>
            </div>
            <div className='w-[60%]'>
                <img src={headerImg} alt="header image" className='w-full h-60' />
            </div>
        </div>
    </div>
  )
}

export default Header
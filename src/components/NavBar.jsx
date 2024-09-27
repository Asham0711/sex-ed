// import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('')
  
  return (
    <div className="max-w-screen container mx-auto p-4 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl">
        <ul className="flex text-gray-800 mx-auto font-abhaya w-11/12 justify-between">
          <li className="relative group">
            <Link to="/" className={`hover:text-[#F7A297] text-xl transition-colors 
              duration-300 ${activeTab === 'Understanding Puberty' ? 'text-[#F7A297]' : ''}`} 
              onClick={() => setActiveTab('Understanding Puberty')}>
              Understanding Puberty
            </Link>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#F7A297] transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <Link to="/anatomy-and-reproduction" className={`hover:text-[#F7A297] text-xl transition-colors 
              duration-300 ${activeTab === 'Anatomy and Reproduction' ? 'text-[#F7A297]' : ''}`} 
              onClick={() => setActiveTab('Anatomy and Reproduction')}>
              Anatomy and Reproduction
            </Link>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#F7A297] transition-all duration-300 group-hover:w-full"></div>
          </li>   
          <li className="relative group">
            <Link to="/good-bad-touch" className={`hover:text-[#F7A297] text-xl transition-colors 
              duration-300 ${activeTab === 'Bad and Good Touch' ? 'text-[#F7A297]' : ''}`} 
              onClick={() => setActiveTab('Bad and Good Touch')}>
              Bad and Good Touch
            </Link>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#F7A297] transition-all duration-300 group-hover:w-full"></div>
          </li>  
        </ul>
        <br />
        <ul className="flex text-gray-800 mx-auto font-abhaya w-7/12 justify-between">
          <li className="relative group">
            <Link to="/safety" className={`hover:text-[#F7A297] text-xl transition-colors 
              duration-300 ${activeTab === 'Safety and Online Behaviour' ? 'text-[#F7A297]' : ''}`} 
              onClick={() => setActiveTab('Safety and Online Behaviour')}>
              Safety and Online Behaviour
            </Link>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#F7A297] transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <Link to="/reproductive-health" className={`hover:text-[#F7A297] text-xl transition-colors 
              duration-300 ${activeTab === 'Reproductive Health' ? 'text-[#F7A297]' : ''}`} 
              onClick={() => setActiveTab('Reproductive Health')}>
              Reproductive Health and Protection
            </Link>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#F7A297] transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>
    </div>
  )
}

export default NavBar
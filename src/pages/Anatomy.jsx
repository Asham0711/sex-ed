// import React from 'react'

import AnatomyBody from "../components/AnatomyBody"
import AnatomyFooter from "../components/AnatomyFooter"
import AnatomyHeader from "../components/AnatomyHeader"

const Anatomy = () => {
  return (
    <div className="max-w-screen container mx-auto p-8 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl space-y-10">
        <AnatomyHeader />
        <AnatomyBody />
        <AnatomyFooter />
    </div>
  )
}

export default Anatomy
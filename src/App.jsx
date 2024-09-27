// import ellipse from './assets/Ellipse 1.png'

import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Anatomy from "./pages/Anatomy"
import Understanding from "./pages/Understanding"

function App() {

  return (
    <div className="bg-[#fab5ac] flex min-h-screen max-w-screen flex-col">
      {/* <img src={ellipse} alt="Ellipse" className='w-[1300px] h-[500px]'/> */}
      <div className="w-11/12 mx-auto">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Understanding/>} />
          <Route path="/anatomy-and-reproduction" element={<Anatomy/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App

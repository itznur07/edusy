import React from 'react'
import Navbar from '../Components/Navbar'
import TopBar from '../Components/TopBar'

const Home = () => {
  return (
    <>
    {/* TopBar and Navbar */}
    <div style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/academia/images/bg_1.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "140vh",
        }}>
      <TopBar/>
      <Navbar/>
    </div>
        
    </>
  )
}

export default Home
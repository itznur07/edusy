import React from 'react'
import BannerContent from '../Components/BannerContent'
import Navbar from '../Components/Navbar'
import TopBar from '../Components/TopBar'

const Home = () => {
  return (
    <>
    {/* TopBar and Navbar */}
    <div style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/academia/images/bg_1.jpg")`,
          backgroundSize: "cover",
          width: "100%",
          height: "140vh",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
      <TopBar/>
      <Navbar/>
      <BannerContent/>
    </div>
        
    </>
  )
}

export default Home
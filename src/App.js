import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import AllCourses from "./Pages/AllCourses";
import Home from "./Pages/Home";
import PricingPages from './Pages/PricingPages';
import Teams from './Pages/Teams';

const App = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<AllCourses/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path='/pricing' element={<PricingPages/>} />
      </Routes>
    </div>
  );
}

export default App;

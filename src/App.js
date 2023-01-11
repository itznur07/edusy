import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import AllCourses from "./Pages/AllCourses";
import ContactPage from './Pages/ContactPage';
import Home from "./Pages/Home";
import JournalPage from './Pages/JournalPage';
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
        <Route path='/blogs' element={<JournalPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </div>
  );
}

export default App;

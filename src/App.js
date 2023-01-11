import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import AllCourses from "./Pages/AllCourses";
import Home from "./Pages/Home";
import Teams from './Pages/Teams';

const App = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<AllCourses/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/teams" element={<Teams/>} />
      </Routes>
    </div>
  );
}

export default App;

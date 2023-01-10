import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import AllCourses from "./Pages/AllCourses";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<AllCourses/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}

export default App;

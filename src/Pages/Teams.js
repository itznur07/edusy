import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import TeamCard from "../Components/TeamCard";
import TopBar from "../Components/TopBar";

// import needed images
import bg2 from "../assets/images/image_1.jpg";
import team_1 from "../assets/images/team-1.jpg";
import team_2 from "../assets/images/team-2.jpg";
import team_3 from "../assets/images/team-3.jpg";
import team_4 from "../assets/images/team-4.jpg";

const Teams = () => {
  return (
    <>
    <div className="bg-[#f8f8f8]">
      
    <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          backgroundAttachment: "fixed",
        }}
        className='relative'
      >
        <div>
          <TopBar />
          <Navbar />
        </div>
        <div className='absolute inset-0 flex flex-col items-center justify-center space-y-3'>
          <span className='text-[#f8f8f8] text-md font-bold cursor-pointer'>
            <Link to='/'>
              <a href='' className='hover:text-[#1eb2a6]'>
                Home
              </a>
            </Link>{" "}
            About{" "}
          </span>
          <h1 className='text-7xl text-[#ffffff] font-semibold'>Our Teams</h1>
        </div>
      </div>
      {/* our teams */}
      <div className='mx-24 my-24 flex flex-wrap justify-between'>
          <TeamCard
            image={team_1}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
          <TeamCard
            image={team_2}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
          <TeamCard
            image={team_3}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
          <TeamCard
            image={team_4}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
          <TeamCard
            image={team_1}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
          <TeamCard
            image={team_2}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
          <TeamCard
            image={team_3}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
          <TeamCard
            image={team_4}
            name='Ph.D Arthur MaGregor'
            title='DEVELOPER AND LEAD INSTRUCTOR'
          />
        </div>
    </div>
    </>
  );
};

export default Teams;

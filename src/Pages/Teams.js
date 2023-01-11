import React from "react";
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import TeamCard from "../Components/TeamCard";
import TopBar from "../Components/TopBar";

// import needed images
import bg2 from "../assets/images/image_1.jpg";
import team_1 from "../assets/images/team-1.jpg";
import team_2 from "../assets/images/team-2.jpg";
import team_3 from "../assets/images/team-3.jpg";
import team_4 from "../assets/images/team-4.jpg";
import RoutePageHead from "../Components/RoutePageHead";

const Teams = () => {
  return (
    <>
      <div className='bg-[#f8f8f8]'>
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

            <TopBar />
            <Navbar />
            <RoutePageHead heading="Our Teams" subheading="team" />
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
      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Teams;

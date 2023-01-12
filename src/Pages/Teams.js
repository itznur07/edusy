import React from "react";
import Footer from '../Components/Footer';
import Newsletter from '../Components/Newsletter';
import TeamCard from "../Components/TeamCard";
import RouteHead from "./RouteHead";
// import needed images
import team_1 from "../assets/images/team-1.jpg";
import team_2 from "../assets/images/team-2.jpg";
import team_3 from "../assets/images/team-3.jpg";
import team_4 from "../assets/images/team-4.jpg";

const Teams = () => {
  return (
    <>
       {/* page head */}
       <RouteHead headingtext="Our Teams" subheadingtext="teams" />
      {/* page head */}
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
      {/* Footer */}
      <div className="mt-20">
        <Newsletter />
        <Footer/>
      </div>
    </>
  );
};

export default Teams;

import { TeamCard as Card } from "./TeamCard";
import React from "react";

import T1 from "../../assets/team/t1.jpg";
import T2 from "../../assets/team/t2.jpg";
import T3 from "../../assets/team/t3.jpg";
import T4 from "../../assets/team/t4.jpg";
import T5 from "../../assets/team/t5.jpg";

const Team = () => {
  const teamdata = [
    {
      id: 1,
      title: "Alexander Black",
      cover: T1,
      post: "FOUNDER, CEO",
    },
    {
      id: 2,
      title: "Anna Kovalenko",
      cover: T2,
      post: "FINANCE DIRECTOR",
    },
    {
      id: 3,
      title: "Tiffany White",
      cover: T3,
      post: "CREATIVE DIRECTOR",
    },
    {
      id: 4,
      title: "Richard Greenwood",
      cover: T4,
      post: "PROGRAMMER",
    },
    {
      id: 5,
      title: "Jessica Brown",
      cover: T5,
      post: "MARKETING DIRECTOR",
    },
  ];

  return (
    <section className="agency bg-top py-12">
      <span id="ourteam"></span>
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Meet Our Team</h2>
          <p className="text-lg text-gray-600">A team of smart & passionate creatives</p>
        </div>
        {/* Horizontal scrolling container */}
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {teamdata.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

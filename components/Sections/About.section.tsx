import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Bob Wearden</p>
        <p className="mt-1 text-2xl text-white" >
          Software Engineer
        </p>

        <p className="mt-4 text-white" style={{width: "500px"}}>
        I am a software engineer with commercial experience building full stack applications within an Agile team.
        <br/>
        <br/>
        I have jointly delivered software solutions to national and international clients including Coop, XPO, DPD, Warbutons and Northwest Ambulance Service.
        <br/>
        <br/>
        I have been lucky enough to experience the full range of Agile roles across the development lifecycle including designing, prototyping, development, testing and deployment.
        </p>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/pic_of_me.jpeg"
          width="150"
          height="150"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;

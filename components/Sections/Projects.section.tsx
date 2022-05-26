import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://github.com/rwearden/be-nc-news" passHref>
          <a
            className="h-[9rem] w-[18rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#4e99b2] via-[#94cde0] to-[#4e99b2] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Backend</p>
              <p>REST API - JavaScript, Node, Express, Postgres</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/rwearden/nc-news" passHref>
          <a
            className="h-[9rem] w-[18rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#4e99b2] via-[#94cde0] to-[#4e99b2] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Frontend</p>
              <p>React App - Axios, Material UI</p>
            </div>
          </a>
        </Link>

        
        <Link href="https://shmeddit.netlify.app/" passHref>
          <a
            className="h-[9rem] w-[18rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#4e99b2] via-[#94cde0] to-[#4e99b2] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Shmeddit</p>
              <p>Reddit Clone</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/rwearden/cleaner-project" passHref>
          <a
            className="h-[9rem] w-[18rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#4e99b2] via-[#94cde0] to-[#4e99b2] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Cleanr</p>
              <p>Book and pay window cleaners effortlessly</p>
            </div>
          </a>
        </Link>

      </div>
    </div>
  );
};

export default Projects;

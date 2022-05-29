import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Main Skills</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">React JS</span>
          &nbsp;as my frontend framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">JavaScript </span>
          &nbsp;as my frontend language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Material UI</span>
          &nbsp;as my CSS framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Python </span>
          &nbsp;as my backend language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Flask</span>
          &nbsp;as my API framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">AWS and k8s</span>
          &nbsp;as my CI/CD pipeline
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">Node JS</span>,{" "}
        <span className="text-white">Docker</span>,{" "}
        <span className="text-white">React Native</span>,{" "}
        <span className="text-white">Stlyed Components</span>,{" "}
        <span className="text-white">Fast API</span>,{" "}
        <span className="text-white">PostreSQL</span>,{" "}
        <span className="text-white">MySQL</span>,{" "}
        <span className="text-white">Azure Data Studio</span>{" "}
      </p>
    </div>
  );
};

export default Skills;

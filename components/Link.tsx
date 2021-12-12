import { BsArrowRightShort } from "react-icons/bs";

const Link = ({ name, url, username, children }) => {
  return (
    <div className="m-6 flex flex-row gap-4 items-center group cursor-pointer">
      <div>
        <p className="text-xl font-medium group-hover:text-blue-600 duration-100">
          {name}
        </p>
        <p className="font-medium text-gray-600">{username}</p>
      </div>
      <div className="flex flex-row items-center">
        <button className="p-2 rounded-lg bg-gray-100 duration-100 hover:bg-gray-200">
          {children}
        </button>
        <BsArrowRightShort
          size={35}
          className="group-hover:text-blue-500 group-hover:mx-2 duration-100"
        />
      </div>
    </div>
  );
};

export default Link;

import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  BsLinkedin
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/rwearden" />
        <Icon icon={<BsLinkedin />} url="https://www.linkedin.com/in/robert-wearden-900933208/" />
        <Icon icon={<MdEmail />} url="robertwearden2@gmail.com" />
        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/b77yohkbzz3q58hj8jyu0jdtf"
        />
      </div>
    </div>
  );
};

export default Contact;

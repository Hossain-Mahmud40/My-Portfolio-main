import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Hossain-Mahmud40",
    target: "_blank",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/hossain-mahmud-4588573ab/",
    target: "_blank",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@capitalviper1724",
    target: "_blank",
  },
  {
    icon: <FaXTwitter />,
    path: "https://x.com/hossainmp40",
    target: "_blank",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target={item.target}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    path: "https://github.com/Hossain-Mahmud40",
    target: "_blank",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/hossain-mahmud-4588573ab/",
    target: "_blank",
  },
  {
    icon: <FaFacebook />,
    label: "Facebook",
    path: "https://www.facebook.com/hossainmp40",
    target: "_blank",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    path: "https://www.instagram.com/hossainmp40",
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
            rel="noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

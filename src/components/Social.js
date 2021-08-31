import githubIcon from "../images/github.png";
import instagramIcon from "../images/instagram.png";
import linkedinIcon from "../images/linkedin.png";
import mediumIcon from "../images/medium.png";

const social_list = [
  {
    icon: githubIcon,
    altName: "github",
    link: "https://github.com/vtyeh",
  },
  {
    icon: linkedinIcon,
    altName: "linkedin",
    link: "https://www.linkedin.com/in/venessayeh/",
  },
  {
    icon: mediumIcon,
    altName: "medium",
    link: "https://venessa-yeh.medium.com/",
  },
  {
    icon: instagramIcon,
    altName: "instagram",
    link: "https://www.instagram.com/yay_yeh/",
  },
];

export default function Social() {
  return (
    <div className={"contactLinks"}>
      {social_list.map((social) => (
        <a href={social.link} target="_blank" rel="noreferrer">
          <img
            src={social.icon}
            alt={social.altName}
            className={"socialIcon"}
          />
        </a>
      ))}
    </div>
  );
}

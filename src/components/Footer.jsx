import TwitterIcon from "../assets/Twitter Icon.png";
import FacebookIcon from "../assets/Facebook Icon.png";
import InstagramIcon from "../assets/Instagram Icon.png";
import GitHubIcon from "../assets/GitHub Icon.png";

function Footer() {
  return (
    <div className=" container flex items-center justify-center gap-6 bg-secondaryLight dark:bg-secondaryDark h-16">
      <a href="/">
        <img src={TwitterIcon} alt="TwitterIcon" />
      </a>
      <a href="/">
        <img src={FacebookIcon} alt="FacebookIcon" />
      </a>
      <a href="/">
        <img src={InstagramIcon} alt="InstagramIcon" />
      </a>
      <a href="/">
        <img src={GitHubIcon} alt="GitHubIcon" />
      </a>
    </div>
  );
}

export default Footer;

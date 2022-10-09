// pic-info-buttons
import ProfilePic from "../assets/Profile Picture.png";
import MailIcon from "../assets/Mail.png";
import LinkedInIcon from "../assets/linkedin.png";
function Info() {
  return (
    <div className=" text-center">
      <img
        src={ProfilePic}
        alt="profile picture"
        className="w-full rounder-xl"
      />
      <div className="my-5">
        <h1 className=" font-bold text-2xl text-primaryFont dark:text-white">
          Laura Smith
        </h1>
        <h2 className=" text-xs text-secondaryFontLight dark:text-secondaryFontDark mt-1.5">
          Frontend Developer
        </h2>
        <h3 className=" text-[0.6875rem] text-contentFontLight dark:text-headlinesDark mt-2">
          laurasmith.website
        </h3>
      </div>
      <div className=" container flex justify-center items-center gap-4">
        <a
          href="/"
          className=" text-gray-700 bg-white shadow-sm py-2 px-3 flex items-center justify-center gap-2 rounded-md w-28 h-9 border-gray-300 border-[1px] text-sm"
        >
          <img src={MailIcon} alt="" />
          <span>Email</span>
        </a>
        <a
          href="/"
          className=" text-white bg-btnLight dark:bg-btnDark shadow-sm py-2 px-3 flex items-center justify-center gap-2 rounded-md w-28 h-9 border-gray-300 border-[1px] dark:border-none text-sm"
        >
          <img src={LinkedInIcon} alt="" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Info;

import React, { useState } from "react";
import { navLinkData } from "../../constants/index";
import { Link } from "react-scroll";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const gotoX = () => {
    // Redirect to to my Twitter Account
    window.location.href = "https://x.com/Dipanjan1572003";
  };
  const gotoLinkedin = () => {
    // Redirect to my Linkedin Account
    window.location.href =
      "https://www.linkedin.com/in/dipanjan-roy-0a09b727a/";
  };
  const github = () => {
    // Redirect to my GitHub Account
    window.location.href = "https://github.com/RoyDipanjanReek";
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-bodyColors h-20 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600">
      <div className="pl-5 font-bold font-titleFont text-designColor text-3xl">
       MY <span className="text-white">PORTFOLIO</span> 
      </div>
      <div>
        <ul className="hidden md:inline-flex  items-center gap-6 lgl:gap-10">
          {navLinkData.map(({ _id, title, link }) => (
            <li
              className="test-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                className="text-2xl"
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <TfiAlignJustify />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                {""}
                <p className="text-sm text-gray-400 mt-2">
                  I am from India and currently living in Durgapur. I am Doing
                  my Bachelor's in Software Engineering and i will graduate in
                  2026. I am a MERN Stack developer and this is my protofolio.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinkData.map((item) => (
                  <li
                    key={item._id}
                    className="test-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in{" "}
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaGithub onClick={github} />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter onClick={gotoX} />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn onClick={gotoLinkedin} />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor
                            duration-300 text-2xl cursor-pointer "
              >
                <TfiClose className="text-designColor" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;

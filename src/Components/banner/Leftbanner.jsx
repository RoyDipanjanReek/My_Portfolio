import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Leftbanner() {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 100,
    delaySpeed: 5000,
  });
  const gotoX = () => {
    // Redirect to to my Twitter Account
    window.location.href = "https://x.com/Dipanjan1572003"; // Replace with the desired URL
  };
  const gotoLinkedin = () => {
    // Redirect to my Linkedin Page
    window.location.href =
      "https://www.linkedin.com/in/dipanjan-roy-0a09b727a/";
  };
  const github = () => {
    // Redirect to my GitHub page
    window.location.href = "https://github.com/RoyDipanjanReek";
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 px-5">
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-normal">Welcome to my world</h4>
        <h1 className="text-6xl font-bold text-white">
          {" "}
          Hi, I am{" "}
          <span className="text-designColor capitalize">Dipanjan Roy</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span> {text}.</span>
          <Cursor cursorBlinking="false" cursorStyle=" | " cursorColor="red" />
        </h2>
      </div>

      <div className="flex justify-between flex-col gap-6 lgl:gap-0">
        <div>
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
      </div>
    </div>
  );
}

export default Leftbanner;

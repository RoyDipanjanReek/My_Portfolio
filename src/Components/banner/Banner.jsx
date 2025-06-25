import React from "react";
import Leftbanner from "./Leftbanner";
import { BannerImg } from "../../assets/Index";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-10 flex flex-col lgl:flex-row items-center border-b-[1px] border-b-white gap-10 xl:gap-0"
    >
      <Leftbanner />

      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[600px] z-10"
          src={BannerImg}
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-t-full shadow-red-400"></div>
      </div>
    </section>
  );
}

export default Banner;

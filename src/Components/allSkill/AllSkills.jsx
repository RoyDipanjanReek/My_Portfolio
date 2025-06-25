
import Title from "../layout/Title";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
} from "../../assets/Index.js";
function Skills() {
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] borfer-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Visit my skills here" des="My Skills" />
      </div>
      <div className="flex flex-wrap pl-8 gap-6 pt-10">
        <div className="mt-5">
          <div className="flex flex-wrap gap-3 h-full">
            {[
              photo1,
              photo2,
              photo3,
              photo4,
              photo5,
              photo6,
              photo7,
              photo8,
              photo9,
              photo10,
              photo11,
              photo12,
            ].map((photo, index) => (
              <img
                key={index}
                className="h-20 w-20 rounded-sm grid grid-cols- md:h-36 md:w-36"
                src={photo}
                alt={`skill-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

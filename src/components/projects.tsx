import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { config } from "process";

function Projects() {
  const [project, setProject] = useState<string>("Intro");
  const projObj = {
    Intro: {
      textColor: "white",
      bgColor: "transparent",
      heading: "Past Projects",
      text: "Delight your eyes with some of the projects we've done in past. While some were basic (clients' requirements), others brought along challenges which allowed our team to exercise their brains. Nonetheless, the projects speak for themselves and enchants visitors with increased interactivity even with the most simple components, tying a knot for a memorable experience at the least.",
    },
    "Dazzling Donuts": {
      textColor: "#f472b6",
      bgColor: "#fae8ff",
      heading: "Dazzling Donuts",
      text: "Dazzling Donut redefines the limits of an online store regarding interactivity and product showcasing. ",
    },
    "SA Builders": {
      textColor: "#eab308",
      bgColor: "#18181b",
      heading: "SA Builders",
      text: "A company leading in building masterpieces needs a proper platform to showcase their designs with maximum level of depth and that's exactly what we provided. 3D tours of luxury properties provided a beautiful and an immersive experience. One of our favorite projects as well.",
    },
    Fishb0wl: {
      textColor: "#fde047",
      bgColor: "#172554",
      heading: "Fishbowl",
      text: "Delight your eyes with some of the projects we've done in past. While some were basic (clients' requirements), others brought along challenges which allowed our team to exercise their brains. Nonetheless, the projects speak for themselves and enchants visitors with increased interactivity even with the most simple components, tying a knot for a memorable experience at the least.",
    },
    AlSultanTransport: {
      textColor: "#006d62",
      bgColor: "#001c1e",
      heading: "AlSultanTransport",
      text: "Delight your eyes with some of the projects we've done in past. While some were basic (clients' requirements), others brought along challenges which allowed our team to exercise their brains. Nonetheless, the projects speak for themselves and enchants visitors with increased interactivity even with the most simple components, tying a knot for a memorable experience at the least.",
    },
  };

  const springBg = useSpring({
    backgroundColor: projObj[project as keyof typeof projObj]?.bgColor,
  });

  const springText = useSpring({
    color: projObj[project as keyof typeof projObj]?.textColor,
  });

  //handle hover project
  function handleProjectHover(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setProject(e.currentTarget.innerText);
  }

  //handle mouse leave
  function handleMouseLeave(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setProject("Intro");
  }

  return (
    <>
      <a.div
        className="flex h-screen w-screen flex-col justify-around py-28 lg:flex-row lg:px-20 px-4"
        style={springBg}
      >
        <a.div
          className="flex lg:basis-2/3 flex-col justify-center"
          style={springText}
        >
          <div className="text-6xl font-black">
            {projObj[project as keyof typeof projObj].heading}
          </div>
          <div className="pt-4 font-light md:text-lg">
            {projObj[project as keyof typeof projObj].text}
          </div>
          <div
            className={
              "font-bold" + (project == "Intro" ? "" : " hidden")
            }
          >
            Also also also... Check out our{" "}
            <span className="italic text-purple-300">Art Gallery</span>
          </div>
        </a.div>
        <div className="lg:basis-1/3 max-sm:mt-4 self-center w-full rounded-2xl bg-slate-600/40 text-white/70">
          <ul className="p-4 italic">
            <li
              className="border-b py-2 transition-all duration-300 hover:text-pink-300"
              onMouseOver={handleProjectHover}
              onMouseLeave={handleMouseLeave}
            >
              <a href="">Dazzling Donuts</a>
            </li>
            <li
              className="border-b py-2 transition-all duration-300 hover:text-orange-300"
              onMouseOver={handleProjectHover}
              onMouseLeave={handleMouseLeave}
            >
              <a href="">SA Builders</a>
            </li>
            <li
              className="border-b py-2 transition-all duration-300 hover:text-yellow-300"
              onMouseOver={handleProjectHover}
              onMouseLeave={handleMouseLeave}
            >
              <a href="">Fishb0wl</a>
            </li>
            <li
              className="border-b py-2 transition-all duration-300 hover:text-yellow-500"
              onMouseOver={handleProjectHover}
              onMouseLeave={handleMouseLeave}
            >
              <a href="">AlSultanTransport</a>
            </li>
          </ul>
        </div>
      </a.div>
    </>
  );
}

export default Projects;

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
      text: "Dazzling Donut redefines the limits of an online store regarding interactivity and product showcasing.",
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
      text: "A marketing firm needed to grab attention of the giants whilst making sure that they don't look unprofessional. We delivered exactly what they wanted. Some slick animations here, a slick carousel there, with spirkle of elegance.",
    },
    "AlSultan Transport": {
      textColor: "#006d62",
      bgColor: "#001c1e",
      heading: "AlSultan Transport",
      text: "A website made with wordpress CMS with a custom cab booking system. The challenge was to get all the API endpoints and data validity right and oh boy did we get that right.",
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
        className="flex h-screen w-screen flex-col justify-around px-4 py-28 lg:flex-row lg:px-20"
        style={springBg}
      >
        <a.div
          className="flex flex-col justify-center lg:basis-2/3"
          style={springText}
        >
          <div className="text-6xl font-black">
            {projObj[project as keyof typeof projObj].heading}
          </div>
          <div className="pt-4 font-light md:text-lg">
            {projObj[project as keyof typeof projObj].text}
          </div>
          <div className={"font-bold" + (project == "Intro" ? "" : " hidden")}>
            Also also also... Check out our{" "}
            <span className="italic text-purple-300">Art Gallery</span>
          </div>
        </a.div>
        <div className="w-full self-center rounded-2xl bg-slate-600/40 text-white/70 max-sm:mt-4 lg:basis-1/3">
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
              <a href="">AlSultan Transport</a>
            </li>
          </ul>
        </div>
      </a.div>
    </>
  );
}

export default Projects;

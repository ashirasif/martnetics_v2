import { useSpring, a, config } from "@react-spring/web";
import { useEffect, useState } from "react";

function Testimonial() {
  const [testNumber, setTestNumber] = useState(1);
  const [spring, api] = useSpring(() => ({
    from: {
      left: "-50vw",
    },
    config: config.gentle,
    onStart: () => console.log("started"),
    onRest: () => console.log("paused"),
  }));

  // useEffect(() => {
  //   console.log(testNumber);
  //   api.start({ to: { left: `${testNumber * -50 + 50}vw` } });
  // }, [testNumber]);

  const handleTestClick = (n: number) => {
    api.start({ to: { left: `${n * -50}vw` } });
  };

  const testimonials = {
    nazim: {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores nemo voluptatum? Blanditiis aperiam earum corporis incidunt temporibus? Similique modi veritatis eius quae exercitationem officia et quis excepturi itaque alias!",
      name: "Muhammad Nazim",
      image: "/nazim.png",
      occupation: "CEO, SA Builders",
    },
    waqas: {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores nemo voluptatum? Blanditiis aperiam earum corporis incidunt temporibus? Similique modi veritatis eius quae exercitationem officia et quis excepturi itaque alias!",
      name: "Waqas Qureshi",
      image: "/nazim.png",
      occupation: "CEO, knock social",
    },
  };

  return (
    <div className="flex h-screen flex-col justify-center w-screen items-center">
      <div className="text-center text-6xl font-black text-white">
        People Said
      </div>
      <div className="self-start pt-16">
        {/* <div
          onClick={() => {
            if (testNumber - 1 < 0) {
              setTestNumber(Object.keys(testimonials).length - 1);
            } else if (testNumber - 1 > Object.keys(testimonials).length - 1) {
              setTestNumber(0);
            } else {
              setTestNumber(testNumber - 1);
            }
          }}
          className="relative z-50 rounded-full bg-white p-4 text-2xl transition-all duration-300 hover:bg-black hover:text-white"
        >
          &lt;
        </div> */}

        <div className="text-white">
          <a.div
            className="relative flex translate-x-[25vw] flex-row justify-start gap-4"
            style={spring}
          >
            <div
              className="h-40 w-[50vw] rounded-2xl bg-gray-600/70"
              onClick={() => {
                handleTestClick(0);
              }}
            >
              bleh
            </div>
            <div
              className="h-40 w-[50vw] rounded-2xl bg-gray-600/70"
              onClick={() => {
                handleTestClick(1);
              }}
            >
              blah
            </div>
            <div
              className="h-40 w-[50vw] rounded-2xl bg-gray-600/70"
              onClick={() => {
                handleTestClick(2);
              }}
            >
              sukaaa
            </div>
          </a.div>
        </div>

        {/* <div
          onClick={() => {
            if (testNumber + 1 < 0) {
              setTestNumber(Object.keys(testimonials).length - 1);
            } else if (testNumber + 1 > Object.keys(testimonials).length - 1) {
              setTestNumber(0);
            } else {
              setTestNumber(testNumber + 1);
            }
          }}
          className="relative z-50 rounded-full bg-white p-4 text-2xl transition-all duration-300 hover:bg-black hover:text-white"
        >
          &gt;
        </div> */}
      </div>
    </div>
  );
}

export default Testimonial;

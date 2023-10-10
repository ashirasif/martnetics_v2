import { useSpring, a, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
import { useEffect, useState } from "react";

function Testimonial({ isMobile }: { isMobile: boolean }) {
  const [spring, api] = useSpring(() => ({
    from: {
      left: "0vw",
    },
    config: config.gentle,
    onStart: () => console.log("started"),
    onRest: () => console.log("paused"),
  }));

  const [number, setNumber] = useState<number>(0);
  const bind = useDrag(
    ({ swipe: [swipeX] }) => {
      let n;
      if (swipeX != 0) {
        n = swipeX < 0 ? 1 : -1;
      }
      if (
        n &&
        n != 0 &&
        Object.keys(testimonials).length > number + n &&
        number + n >= 0
      ) {
        setNumber(number + n);
      }
    },
    { swipe: { duration: 500 } },
  );

  useEffect(() => {
    api.start({
      to: { left: `${number * -(window.innerWidth > 1024 ? 51 : 85)}vw` },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  const testimonials = {
    nazim: {
      text: "We gave them freedom to do their own thing and the result was more than what we were expecting. All requirements ticked and a design worth looking at. Modern and dynamic. They also gave us our own design language comprising of our values and priciples. Safe to say that our office now needs a renovation.",
      name: "Muhammad Nazim",
      image: "/nazim.png",
      occupation: "CEO, SA Builders",
    },
    waqas: {
      text: "Our work was quite straight forward and they overtook it very professionally. The delivery was on time and after a revision, we had a site that was functional and elegant.",
      name: "Waqas Qureshi",
      image: "/waqas.jpeg",
      occupation: "CEO, knock social",
    },
    doll: {
      text: "We needed a website fast. Like 3 days fast. I don't know how but they had a working demo on the next day. I just know for a fact who I'm calling for the next update.",
      name: "Areeb Shuaib",
      image: "/areeb.jpg",
      occupation: "CEO, IT WALAY",
    },
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center text-6xl font-black text-white">
        People Said
      </div>
      <div className="self-start pt-16">
        <div {...bind()} className="drag text-white">
          <a.div
            className="relative flex translate-x-[10vw] flex-row justify-start gap-4 lg:translate-x-[25vw]"
            style={spring}
          >
            {Object.keys(testimonials).map((e, i) => (
              <div
                key={i}
                className="flex w-[80vw] flex-col justify-center gap-4 rounded-2xl bg-gray-600/30 p-4 italic lg:w-[50vw]"
                onClick={() => {
                  setNumber(i);
                }}
              >
                <div className="text-center">
                  &quot;{testimonials[e as keyof typeof testimonials].text}
                  &quot;
                </div>
                <div className="flex flex-row justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    src={testimonials[e as keyof typeof testimonials].image}
                    className="w-12 rounded-full"
                  />

                  <div className="ml-2">
                    <div className="font-normal">
                      {testimonials[e as keyof typeof testimonials].name}
                    </div>
                    <div className="text-sm font-light text-white/60">
                      {testimonials[e as keyof typeof testimonials].occupation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </a.div>
        </div>
      </div>
      {isMobile ? (
        <div className="mt-10 self-center font-light tracking-widest text-white/50">
          &#8592; SWIPE &#8594;
        </div>
      ) : null}
    </div>
  );
}

export default Testimonial;

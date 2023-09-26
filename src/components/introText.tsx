import { useSpring, config, a } from "@react-spring/web";
import { useEffect } from "react";

function IntroText({ currentPage }: { currentPage: number }) {
  const [springLeftToRight, api] = useSpring(() => ({
    from: {
      left: "200vw",
    },
    config: config.wobbly,
  }));

  useEffect(() => {
    switch (currentPage) {
      case 2:
        api.start({ left: "0vw" });
        break;
      default:
        api.start({ left: "200vw" });
        break;
    }
  }, [currentPage]);

  return (
    <a.div className="absolute top-0" style={springLeftToRight}>
      <div className="flex h-screen w-screen flex-col items-center justify-center text-center text-white">
        <div className="text-6xl font-black">Who are we?</div>
        <div className="w-2/3 pt-2 text-xl font-light">
        At Martnetics, we are more than just a design house; we are the architects of immersive digital experiences. We are a team of passionate creatives, developers, and innovators dedicated to redefining the way brands connect with their audience online. Unlike others, we don't simply create a website for you and stop there. We are committed to making your product stand out with our expertise. We work with an affordable plan tailored to your needs until you can visibly witness an increase in sales.
        </div>
      </div>
    </a.div>
  );
}

export default IntroText;

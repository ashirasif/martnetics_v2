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
      <div className="flex h-screen w-screen flex-col text-center items-center justify-center text-white">
        <div className="text-6xl font-black">Who are we?</div>
        <div className="font-light w-2/3 pt-2 text-xl">
          We take care of the online sector of your business. Not mentioning
          this in hopes of getting a web development gig from you, but to truely
          influence the aspects that people see of your product. <br />
          We cover 
        </div>
      </div>
    </a.div>
  );
}

export default IntroText;

import React, { useEffect } from "react";
import { useSpring, a } from "@react-spring/web";

const PageDots = ({
  pages,
  currentPage,
}: {
  pages: number;
  currentPage: number;
}) => {
  const springPagesDots = useSpring({ opacity: currentPage < 2 ? 0 : 1 });
  return (
    <a.div
      className="fixed md:right-2 right-1 top-1/2 z-40 -translate-y-1/2 rounded-3xl bg-black/70"
      style={springPagesDots}
    >
      <div className="flex flex-col items-center justify-center px-1 md:px-2">
        {Array.from({ length: pages }).map((_, i) => (
          <div
            key={i}
            className={
              "text-2xl text-white transition-all duration-500 2xl:text-5xl" +
              (currentPage == i + 1
                ? " font-bold md:font-black"
                : " font-light")
            }
          >
            &#183;
          </div>
        ))}
      </div>
    </a.div>
  );
};

export default PageDots;

import React, { useEffect, useState } from "react";

const NavBar = ({
  setM,
  pages,
}: {
  setM: (s: number) => void;
  pages: number;
}) => {
  const [nav, openNav] = useState(false);
  useEffect(() => {
    console.log(nav);
  }, [nav]);
  return (
    <>
      <div className="hidden flex-row gap-8 px-8 text-xl font-normal tracking-widest text-white md:flex">
        <div
          onClick={() => setM(3 / pages)}
          className="hover: rounded-2xl bg-black p-3 transition-all duration-200 hover:bg-white hover:text-black"
        >
          Services
        </div>
        <div
          onClick={() => setM(5 / pages)}
          className="hover: rounded-2xl bg-black p-3 transition-all duration-200 hover:bg-white hover:text-black"
        >
          Contact
        </div>
        <div className="hover: rounded-2xl bg-black p-3 transition-all duration-200 hover:bg-white hover:text-black">
          Blog
        </div>
        <div
          onClick={() => setM(1 / pages)}
          className="hover: rounded-2xl bg-black p-3 transition-all duration-200 hover:bg-white hover:text-black"
        >
          About
        </div>
      </div>
      <div
        onClick={() => openNav(true)}
        className="mr-4 rounded-2xl bg-black p-3 font-black uppercase tracking-widest text-white md:hidden"
      >
        Nav &#129147;
      </div>
      {nav ? (
        <div className="w-50 fixed left-0 top-0 h-screen w-screen bg-black/80 md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-4 text-2xl font-light tracking-widest text-white">
            <div onClick={() => openNav(false)} className="text-4xl font-black">
              &times;
            </div>
            <div
              onClick={() => {
                setM(3 / pages);
                openNav(false);
              }}
            >
              Services
            </div>
            <div
              onClick={() => {
                setM(5 / pages);
                openNav(false);
              }}
            >
              Contact
            </div>
            <div>Blog</div>
            <div
              onClick={() => {
                setM(1 / pages);
                openNav(false);
              }}
            >
              About
            </div>
                  </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;

import { PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Scene } from "../components/3d/Scene";
import React, { useEffect, useRef, useState } from "react";
import { useSpring, config, a } from "@react-spring/web";
import IntroText from "~/components/introText";
import Image from "next/image";
import Testimonial from "~/components/testimonial";
import Projects from "~/components/projects";
import Contact from "~/components/contact";
import { useDrag } from "@use-gesture/react";
import NavBar from "~/components/navbar";
import Icons from "~/components/icons";
import PageDots from "~/components/pageDots";
import Form from "~/components/form";
import Services from "~/components/services";

export default function Home() {
  const [dpr, setDpr] = useState<number>(1);
  const [m, setM] = useState<number>(0.002);
  const pages = useRef<number>(7);
  const [perm, setPerm] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // updates current page on scroll
  useEffect(() => {
    setCurrentPage(Math.floor(m / (1 / pages.current)) + 1);
  }, [m]);

  // updates cursor position with mouse-move
  const positionElement = (e: any) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    if (!cursorRef.current) {
      return;
    }
    cursorRef.current.style.transform = `translate3d(${mouseX - 15}px, ${
      mouseY - 15
    }px, 0)`;
  };

  useEffect(() => {
    window.scrollTo(0, document.getElementById("main")!.scrollHeight)
  })

  useEffect(() => {
    window.addEventListener("mousemove", positionElement);
    return () => window.removeEventListener("mousemove", positionElement);
  }, []);

  const springFrame = useSpring({
    opacity: currentPage == 1 ? 1 : 0,
    pointerEvents: currentPage == 1 ? "auto" : "none",
  });

  const springProductShowcase = useSpring({
    opacity: 0,
    left: "-100vw",
    pointerEvents: "none",
    config: {
      mass: 1,
      tension: 200,
      friction: 30,
    },
  });

  const springIntrotext = useSpring({
    opacity: [2, 3].includes(currentPage) ? 1 : 0,
    pointerEvents: [2, 3].includes(currentPage) ? "auto" : "none",
  });

  const springWatchSpecs = useSpring({
    opacity: 0,
    left: "-100vw",
    pointerEvents: "none",
    config: config.default,
  });

  
  const scrollSpring = useSpring({
    from: {
      bottom: "-10rem",
    },
    to: {
      bottom: "0rem",
    },
    config: config.wobbly,
  });

  const springLogo = useSpring({
    top: currentPage > 1 ? "1rem" : "-10vh",
    config: config.default,
  });

  const springServices = useSpring({
    opacity: currentPage == 4 ? 1 : 0,
    left: currentPage == 4 ? "0" : "-100vw",
    pointerEvents: currentPage == 4 ? "auto" : "none",
    config: {
      mass: 1,
      tension: 200,
      friction: 30,
    },
  });

  const springProjects = useSpring({
    opacity: 0,
    right: "-100vw",
    pointerEvents: "none",
    config: {
      mass: 1,
      tension: 200,
      friction: 30,
    },
  });

  const springTestimonials = useSpring({
    opacity: currentPage == 5 ? 1 : 0,
    pointerEvents: currentPage == 5 ? "auto" : "none",
  });

  const springContact = useSpring({
    opacity: currentPage == 6 ? 1 : 0,
    pointerEvents: currentPage == 6 ? "auto" : "none",
  });

  const springForm = useSpring({
    opacity: currentPage == 7 ? 1 : 0,
    pointerEvents: currentPage == 7 ? "auto" : "none",
  });

  // haqndles isMobile
  useEffect(() => {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4),
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor);

    setIsMobile(check);
  }, []);

  // handle wheel event on desktop
  const handleScroll = (e: WheelEvent): void => {
    const trackpad: boolean = e.deltaY
      ? Math.abs(e.deltaY) < 100
      : e.deltaMode === 0;
    if (
      m + (Math.sign(e.deltaY) / 100) * (trackpad ? 0.8 : 2) > 0.002 &&
      m + (Math.sign(e.deltaY) / 100) * (trackpad ? 0.8 : 2) <= 1
    ) {
      setM(m + (Math.sign(e.deltaY) / 100) * (trackpad ? 0.8 : 2));
    }
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("wheel", handleScroll);
    }
  });

  // bg-colors
  const bgColor = {
    1: "bg-black",
    2: "bg-[#000129]",
    3: "bg-[#110814]",
    4: "bg-[#1a1a2e]",
    5: "bg-black",
    6: "bg-[#000d28]",
    7: "bg-[#000d17]",
  };

  const bind = useDrag(
    ({ swipe: [, swipeY] }) => {
      if (swipeY == 1) {
        if (m - 1 / pages.current >= 0) {
          setM(m - 1 / pages.current);
        }
      } else if (swipeY == -1) {
        if (m + 1 / pages.current < 1) {
          setM(m + 1 / pages.current);
        }
      }
    },
    { swipe: { duration: 500 } },
  );

  return (
    <>
      <Head>
        <title>Martnetics</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favi.png" />
      </Head>
      <main className="selection:bg-white selection:text-black h-[95vh]" id="main">
        <div
          {...bind()}
          className="drag relative h-full w-full overflow-hidden"
        >
          {perm ? (
            <>
              {/* Progress */}
              <div
                className={
                  "pointer-events-none fixed right-4 z-30 rounded-full bg-black px-3 py-2 text-xl font-black text-white lg:text-2xl 2xl:text-4xl bottom-6"
                }
              >
                {Math.floor(m * 100)}%
              </div>

              {/* Cursor */}
              {isMobile ? null : (
                <div
                  ref={cursorRef}
                  className="pointer-events-none absolute top-0 z-50 h-8 w-8 rounded-full bg-white/75 bg-blend-color"
                />
              )}

              {/* Logo */}
              <a.div
                className="fixed left-6 z-30 brightness-200"
                style={springLogo}
                onClick={() => {
                  setM(0.002);
                }}
              >
                <div>
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-[4.4rem] object-contain 2xl:w-20"
                  />
                  <span className="absolute -top-1 left-[80px] text-base font-light tracking-widest text-white 2xl:left-[90px] 2xl:text-xl">
                    DESIGN HOUSE
                  </span>

                </div>
                
              </a.div>

              {/* NavBar */}
              <a.div className="fixed right-0 top-0 z-40" style={springLogo}>
                <NavBar setM={setM} pages={pages.current} />
              </a.div>

              {/* Pages Dots */}
              <PageDots currentPage={currentPage} pages={pages.current} />

              {/* Landing page */}
              <a.div
                className="absolute z-20 flex flex-col justify-between h-[90vh] bottom-0"
                style={springFrame as any}
              >
                <div className="flex flex-col justify-center px-4 tracking-widest text-white">
                  <div className="w-1/2">
                    <div className="text-6xl font-black tracking-tight lg:text-7xl 2xl:text-9xl">
                      Add Another Dimension With Martnetics.
                    </div>
                  </div>
                  <div
                    className={
                      "self-end text-right text-xl font-light sm:text-2xl 2xl:text-4xl" +
                      (isMobile ? " text-white" : " text-white/70")
                    }
                  >
                    <ul>
                      <li>
                        <div
                          className="transition-all duration-300 hover:text-white"
                          onClick={() => setM(6 / pages.current)}
                        >
                          Projects
                        </div>
                      </li>
                      <li>
                        <div className="transition-all duration-300 hover:text-white">
                          Blog
                        </div>
                      </li>
                      <li>
                        <div
                          className="transition-all duration-300 hover:text-white"
                          onClick={() => setM(1 / pages.current)}
                        >
                          About
                        </div>
                      </li>
                      <li>
                        <div
                          className="transition-all duration-300 hover:text-white"
                          onClick={() => setM(3 / pages.current)}
                        >
                          Services
                        </div>
                      </li>
                      <li>
                        <div
                          className="transition-all duration-300 hover:text-white"
                          onClick={() => setM(5 / pages.current)}
                        >
                          Contact
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-col items-end justify-end gap-2 lg:flex-row">
                    <Icons />
                  </div>
                </div>

                <a.div
                  className="relative pl-4 text-base font-black uppercase tracking-widest text-white lg:text-xl"
                  style={scrollSpring}
                >
                  <Image
                    src="/loader_2.png"
                    className="mb-1 inline w-12 animate-spin"
                    width={20}
                    height={20}
                    alt="loader"
                  />
                  <span className="pl-1">
                    {isMobile ? "Swipe up" : "Scroll down gently"}
                  </span>
                </a.div>
              </a.div>

              {/* Intro Text */}
              <a.div
                style={springIntrotext as any}
                className="absolute left-0 top-0 z-20"
              >
                <IntroText currentPage={currentPage} />
              </a.div>

              {/* Watch Markup */}
              <div className="absolute left-0 top-0">
                <div className="flex h-screen flex-col justify-start px-4 py-28 text-white lg:justify-center">
                  <a.div
                    className="relative"
                    style={springProductShowcase as any}
                  >
                    <h1 className="font-black z-20 relative text-4xl 2xl:text-6xl w-fit">
                      Selling A Product?
                    </h1>
                    <div className="pt-2 font-light sm:text-xl relative z-20 lg:w-1/2">
                      Allow us to showcase it ⌚. Ditch the 2D images in favor
                      of realtime 3D previews
                    </div>
                  </a.div>
                  {isMobile ? null : (
                    <a.div
                      className="relative z-20 justify-self-end text-lg font-black tracking-wide text-white/70"
                      style={springProductShowcase as any}
                    >
                      <p>?: drag the watch around</p>
                    </a.div>
                  )}
                </div>
              </div>

              {/* Watch Specs */}
              <a.div
                className="absolute top-0 z-20"
                style={springWatchSpecs as any}
              >
                <div className="flex h-screen flex-col justify-start tracking-wider text-white max-lg:px-4 max-lg:py-24 lg:justify-center">
                  <div className="text-4xl 2xl:text-6xl font-black">Specs</div>
                  <div className="pt-4 font-light italic">
                    <div>
                      - Will make your wrist as cold as the South Pole 🥶
                    </div>
                    <div>- Impressed women guaranteed 💖</div>
                    <div>- Tells the time just fine ⌛</div>
                  </div>
                </div>
              </a.div>

              {/* Services */}
              <a.div
                className={"absolute top-0 z-20"}
                style={springServices as any}
              >
                <Services />
              </a.div>

              {/* Projects */}
              <a.div
                className={"absolute top-0 z-20"}
                style={springProjects as any}
              >
                <Projects />
              </a.div>

              {/* Contact */}
              <a.div
                className={"absolute left-0 top-0 z-20"}
                style={springContact as any}
              >
                <Contact />
              </a.div>

              {/* Testimonials */}
              <a.div
                className={"absolute left-0 top-0 z-20"}
                style={springTestimonials as any}
              >
                <Testimonial isMobile={isMobile} />
              </a.div>

              <a.div
                className={"absolute left-0 top-0 z-20"}
                style={springForm as any}
              >
                <Form />
              </a.div>
            </>
          ) : null}

          {/* R3F Canvas */}
          <div className="fixed left-0 top-0 h-screen w-full">
            <Canvas
              shadows
              gl={{ powerPreference: "high-performance", antialias: true }}
              dpr={dpr}
              className={
                "transition-colors duration-700 " +
                bgColor[
                  (Math.floor(m / (1 / pages.current)) +
                    1) as keyof typeof bgColor
                ]
              }
            >
              <PerformanceMonitor
                onIncline={() => setDpr(2)}
                onDecline={() => setDpr(1)}
              />
              <Scene
                m={m}
                currentPage={currentPage}
                isMobile={isMobile}
                handleState={setPerm}
              />
            </Canvas>
          </div>
        </div>
      </main>
    </>
  );
}

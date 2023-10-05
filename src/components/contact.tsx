import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="flex w-screen md:h-screen flex-col items-center justify-center px-4 py-20 text-white">
      {/* Form */}
      <div className="lg:w-[60vw]">
        <div className="text-4xl font-black md:text-6xl">Contact</div>
        <div className="pt-2 font-light md:pt-4 md:text-lg">
          We know you <span className="font-black italic">loved</span> what you
          saw. If not then, <span className="text-pink-300">click here</span> to
          get an appointment with a really good eye doctor. Honestly, you should
          just give us a call and we&apos;ll take on from there. Since every client
          is looking for a unique thing and have different requirements, It&apos;s
          just best to converse on phone or face to face.
        </div>
      </div>
      <form>
        <div className="mt-2 md:mt-4 grid grid-flow-row rounded-xl border bg-black/50 px-8 py-4 2xl:mt-8 2xl:w-[60vw] 2xl:gap-8 2xl:text-xl">
          <div className="grid grid-cols-3 md:gap-4 justify-between">
            <div className="max-md:col-span-3">
              <label className="block p-2 font-bold tracking-wider">
                NAME:
              </label>
              <input
                type="text"
                className="rounded-xl border border-white w-full bg-transparent px-2 sm:py-2 focus:outline-none 2xl:h-12"
                required
              />
            </div>
            <div className="max-md:col-span-3">
              <label className="block p-2 font-bold tracking-wider">
                COMPANY NAME:
              </label>
              <input
                type="text"
                className="rounded-xl border border-white w-full bg-transparent px-2 focus:outline-none sm:py-2 2xl:h-12"
                required
              />
            </div>
            <div className="max-md:col-span-3">
              <label className="block p-2 font-bold tracking-wider">
                JOB TYPE:
              </label>
              <select
                className="w-full appearance-none rounded-xl border border-white bg-transparent px-2 sm:py-2 after:text-right after:text-white after:content-['hello'] focus:outline-none 2xl:h-12"
                required
              >
                <option value="web-development" className="text-black">
                  Web Development
                </option>
                <option value="branding" className="text-black">
                  Branding & Design
                </option>
                <option value="marketing" className="text-black">
                  Digital Marketing
                </option>
                <option value="hug" className="text-black">
                  Just a hug 🫂
                </option>
              </select>
            </div>
          </div>
          <div>
            <label className="block p-2 font-bold uppercase tracking-wider">
              Brief Project Details:
            </label>
            <textarea className="w-full appearance-none rounded-xl border bg-transparent p-4 focus:outline-none max-sm:h-4"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-2 w-full appearance-none rounded-xl bg-white p-2 font-black tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-row justify-center gap-20 pt-8">
        <a href="">
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-none transition-colors duration-300 hover:text-black"
            size="2x"
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="cursor-none transition-colors duration-300 hover:text-black"
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faBehance}
            size="2x"
            className="cursor-none transition-colors duration-300 hover:text-black"
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faYoutube}
            size="2x"
            className="cursor-none transition-colors duration-300 hover:text-black"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;

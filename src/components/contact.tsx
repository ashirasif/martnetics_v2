import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-white">
      {/* Form */}
      <div className="w-[60vw]">
        <div className="text-6xl font-black">Contact</div>
        <div className="pt-4 text-xl font-light">
          We know you <span className="font-black italic">loved</span> what you
          saw. If not then, <span className="text-pink-300">click here</span> to
          get an appointment with a really good eye doctor.
        </div>
        <div className="pt-4 text-xl font-light">
          Honestly, you should just give us a call and we'll take on from there.
          Since every client is looking for a unique thing and have different
          requirements, It's just best to converse on phone or face to face.
        </div>
      </div>
      <form>
        <div className="mt-8 grid w-[60vw] grid-flow-row gap-8 rounded-xl border bg-black/50 px-8 py-4 text-xl ">
          <div className="flex flex-row justify-between">
            <div>
              <label className="block p-2 font-bold tracking-wider">
                NAME:
              </label>
              <input
                type="text"
                className="h-12 rounded-xl border-2 border-white bg-transparent px-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block p-2 font-bold tracking-wider">
                COMPANY NAME:
              </label>
              <input
                type="text"
                className="h-12 rounded-xl border-2 border-white bg-transparent px-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block p-2 font-bold tracking-wider">
                JOB TYPE:
              </label>
              <select
                className="h-12 appearance-none rounded-xl border-2 border-white bg-transparent px-4 after:text-right after:text-white after:content-['hello'] focus:outline-none"
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
            <label className="block p-2 font-bold tracking-wider">
              SOME DETAILS ABOUT THE PROJECT:
            </label>
            <textarea className="w-full appearance-none rounded-xl border bg-transparent p-4 focus:outline-none"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full appearance-none rounded-xl bg-white p-4 font-black tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-row justify-center gap-20 pt-8">
        <a href=""><FontAwesomeIcon icon={faInstagram} className="hover:text-black transition-colors duration-300 cursor-none" size="2x" /></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-black transition-colors duration-300 cursor-none" /></a>
        <a href=""><FontAwesomeIcon icon={faBehance} size="2x" className="hover:text-black transition-colors duration-300 cursor-none" /></a>
        <a href=""><FontAwesomeIcon icon={faYoutube} size="2x" className="hover:text-black transition-colors duration-300 cursor-none"/></a>
      </div>
    </div>
  );
}

export default Contact;

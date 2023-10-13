import React from "react";
import Icons from "./icons";

function Contact() {
  function handleMail() {
    // @ts-ignore
    window.location = "mailto:contact@martnetics.com";
  }
  return (
    <div className="flex w-screen flex-col items-center justify-center px-4 py-20 pr-8 text-white md:h-screen">
      {/* Form */}
      <div className="lg:w-[60vw]">
        <div className="text-6xl font-black md:text-6xl">Contact</div>
        <div className="pt-2 font-light md:pt-4 md:text-lg">
          We know you <span className="font-black italic">loved</span> what you
          saw. If not then, <span className="text-pink-300">click here</span> to
          get an appointment with a really good eye doctor. Honestly, you should
          just give us a call and we&apos;ll take on from there. Since every
          client is looking for a unique thing and have different requirements,
          It&apos;s just best to converse on phone or face to face.
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 rounded-3xl border border-white bg-black/60 p-4 lg:max-w-[60vw]">
        <div className="col-span-3 flex flex-col justify-around border-r border-white p-4 lg:text-lg">
          <div>
            <h1 className="font-bold lg:text-2xl">Address:</h1>
            <p className="font-light italic text-white/60 hover:text-white">
              7901 4th St. N STE 12325 St.Petersburg, FL 33702
            </p>
          </div>
          <div>
            <h1 className="font-bold lg:text-2xl">Email:</h1>
            <p
              className="font-light italic text-white/60 hover:text-white"
              onClick={handleMail}
            >
              contact@martnetics.com
            </p>
          </div>
          <div>
            <h1 className="font-bold lg:text-2xl">Phone:</h1>
            <p className="font-light italic text-white">+1 (786) 998 0726</p>
            <div className="italic text-white/60 hover:text-white">
              Book a call?
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 p-4">
          <Icons />
        </div>
      </div>
      <div className="mt-4 italic text-white/30 lg:text-xl">
        Or just fill the form below and we&apos;ll get to you.😇
      </div>
    </div>
  );
}

export default Contact;

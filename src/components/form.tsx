import React, { useState } from "react";

const Form = () => {
  const [dd, setDd] = useState<boolean>(false);
  const [option, setOption] = useState<string>("Select One");
  function handleClick(e: React.MouseEvent<HTMLLIElement>) {
    setOption(e.currentTarget.textContent!);
  }
  function handleSumbit() {
    if (document.getElementById("job-btn")?.innerText != "Select One") {
      const subject = `${
        (document.querySelector('[name="name"]') as HTMLInputElement)!.value
      } From ${(document.querySelector('[name="company"]') as HTMLInputElement)!.value}`;
      const body = `Project Type: ${
        document.getElementById("job-btn")!.innerText
      } %0D%0ACompany Name: ${(
        document.querySelector('[name="email"]') as HTMLInputElement)!.value} %0D%0A${(
        document.querySelector('[name="details"]') as HTMLTextAreaElement)!.value}`;
      window.open(
        `mailto:contact@martnetics.com?subject=${encodeURI(
          subject,
        )}&body=${body}`,
      );
    }
  }
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center">
      {/* <form> */}
      <div className="mt-2 grid w-[90vw] grid-flow-row gap-4 rounded-xl bg-black/50 px-8 py-4 text-white md:mt-4 2xl:mt-8 2xl:w-[80vw] 2xl:gap-20 2xl:text-xl">
        <div className="grid grid-cols-4 justify-between gap-4 2xl:gap-20">
          <div className="col-span-2 max-md:col-span-4">
            <label className="block p-2 font-bold tracking-wider">
              NAME: <span className="text-base text-white/50">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full rounded-xl border border-white bg-transparent px-2 focus:outline-none sm:py-2 2xl:h-12"
              required
            />
          </div>
          <div className="col-span-2 max-md:col-span-4">
            <label className="block p-2 font-bold tracking-wider">
              COMPANY NAME: <span className="text-base text-white/50">*</span>
            </label>
            <input
              type="text"
              name="company"
              className="w-full rounded-xl border border-white bg-transparent px-2 focus:outline-none sm:py-2 2xl:h-12"
              required
            />
          </div>
          <div className="col-span-2 max-md:col-span-4">
            <label className="block p-2 font-bold tracking-wider">
              EMAIL: <span className="text-base text-white/50">*</span>
            </label>
            <input
              name="email"
              type="email"
              className="w-full rounded-xl border border-white bg-transparent px-2 focus:outline-none sm:py-2 2xl:h-12"
              required
            />
          </div>
          <div className="col-span-2 max-md:col-span-4">
            <label className="block p-2 font-bold tracking-wider">
              PROJECT TYPE: <span className="text-base text-white/50">*</span>
            </label>
            <button
              type="button"
              id="job-btn"
              className="relative w-full appearance-none rounded-xl border border-white bg-transparent px-2 text-start after:float-right after:text-white after:content-['\25BC'] focus:outline-none sm:py-2 2xl:h-12"
              onClick={() => setDd(!dd)}
              value={option}
            >
              {option}
              <div
                className={
                  "absolute top-full w-full overflow-hidden rounded-3xl bg-black text-center" +
                  (dd ? " " : " hidden")
                }
              >
                <ul className="flex flex-col gap-2">
                  <li
                    onClick={(e) => {
                      handleClick(e);
                      setDd(false);
                    }}
                    className="py-1 italic transition-all duration-300 hover:bg-slate-400 hover:tracking-widest hover:text-black"
                  >
                    Modern Web Development
                  </li>
                  <li
                    onClick={(e) => {
                      handleClick(e);
                      setDd(false);
                    }}
                    className="py-1 italic transition-all duration-300 hover:bg-slate-400 hover:tracking-widest hover:text-black"
                  >
                    Marketing And Branding
                  </li>
                  <li
                    onClick={(e) => {
                      handleClick(e);
                      setDd(false);
                    }}
                    className="py-1 italic transition-all duration-300 hover:bg-slate-400 hover:tracking-widest hover:text-black"
                  >
                    Visual Graphics And Concept Art
                  </li>
                  <li
                    onClick={(e) => {
                      handleClick(e);
                      setDd(false);
                    }}
                    className="py-1 italic transition-all duration-300 hover:bg-slate-400 hover:tracking-widest hover:text-black"
                  >
                    A Wholesome Hug 🫂
                  </li>
                  <li
                    onClick={() => {
                      setDd(!dd);
                      setOption("Select One");
                    }}
                    className="py-1 text-2xl font-black italic transition-all duration-300 hover:bg-slate-400 hover:tracking-widest hover:text-black"
                  >
                    &times;
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div>
          <label className="block p-2 font-bold uppercase tracking-wider">
            Brief Project Details:
          </label>
          <textarea
            name="details"
            className="w-full appearance-none rounded-xl border bg-transparent p-4 focus:outline-none max-sm:h-4"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={() => handleSumbit()}
            className="mt-2 w-full appearance-none rounded-xl bg-white p-2 font-black tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            SUBMIT
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Form;

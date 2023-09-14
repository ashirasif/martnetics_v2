import Image from "next/image"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [dd, setDd] = useState(false)
    useEffect(() => {
        if (dd == true) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [dd])
    return (
        <nav className="my-3 flex w-screen flex-row justify-between px-6 md:px-12 md:my-6 z-50 overflow-hidden">
            <div className="">
                <a href=""><Image alt="logo" src={"/logo.png"} height={50} width={50} /></a>
            </div>
            <div className="hidden md:block font-mono text-lg font-thin uppercase tracking-wider text-primary">
                <ul className="flex flex-row gap-4">
                <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest">
                    <a href="">Projects</a>
                </li>
                <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest">
                    <a href="">Blogs</a>
                </li>
                <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest">
                    <a href="">Pricing</a>
                </li>
                <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest">
                    <a href="">About Us</a>
                </li>
                <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest">
                    <a href="">Contact</a>
                </li>
                </ul>
            </div>
            <div className="md:hidden">
                <div className="text-primary font-extrabold border-s-[3px] border-b-[3px] border-primary px-5 py-1 text-xl hover:text-2xl hover:bg-primary hover:text-black transition-all duration-200" onClick={() => setDd(!dd)}>
                <button>&lt;</button>
                </div>
                <div className={"h-full fixed top-0 right-0 bg-red-950 transition-all duration-500 overflow-hidden " + (dd ? "w-full": "w-0")}>
                <div className="h-full">
                    <ul className="flex flex-col gap-4 text-primary text-xl font-light items-center h-full justify-center">
                    <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest">
                        <button className="text-4xl font-black" onClick={() => setDd(!dd)}>&gt;</button>
                    </li>
                    <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest hover:font-bold">
                        <a href="">Projects</a>
                    </li>
                    <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest hover:font-bold">
                        <a href="">Blog</a>
                    </li>
                    <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest hover:font-bold">
                        <a href="">Pricing</a>
                    </li>
                    <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest hover:font-bold">
                        <a href="">About Us</a>
                    </li>
                    <li className="border-transparent transition-all duration-200 hover:border-b-2 hover:border-primary hover:tracking-widest hover:font-bold">
                        <a href="">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
}


export default NavBar

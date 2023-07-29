import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg"

function Navbar() {

    return (
        <nav className=" relative flex justify-between w-full pl-6  lg:pl-14 lg:mt-10 items-center">
            <Link to={"/"} className=" hover:scale-90 hover:rotate-180 duration-500 ">
                <img src={logo} alt="logo" />

            </Link>
            <div className=" hidden lg:block z-10 left-48 absolute h-[2px] lg:w-[35%] bg-white/20"></div>
            <div className=" uppercase font-Barlow tracking-[2.7px] flex justify-start items-center pl-20 gap-8 lg:w-[57%] w-[75%] bg-white/5 h-24 backdrop-blur-xl">
                <NavLink to={"/"} className="text-gray-400 text-base border-b-2 border-transparent hover:border-white/20 h-full flex items-center"><span className=" text-white">00</span> Home</NavLink>
                <NavLink to={"/destination"} className="text-gray-400 text-base border-b-2 border-transparent hover:border-white/20 h-full flex items-center"><span className=" text-white">01</span> Destination</NavLink>
                <NavLink to={"/crew"} className="text-gray-400 text-base border-b-2 border-transparent hover:border-white/20 h-full flex items-center"><span className=" text-white">02</span> Crew</NavLink>
                <NavLink to={"/technology"} className="text-gray-400 text-base border-b-2 border-transparent hover:border-white/20 h-full flex items-center"><span className=" text-white">03</span> Technology</NavLink>

            </div>
        </nav>
    )

}

export default Navbar;
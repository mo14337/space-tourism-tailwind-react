import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";



function Home() {
    return (
        <div className=" lg:desktopBackgroundHome tabletBackgroundHome w-full h-screen  fixed ">
            <Navbar />
            <div className=" grid grid-rows-2 lg:grid-rows-1  lg:grid-cols-2 w-full min-h-[calc(100vh-138px)]" >
                <div className=" flex flex-col text-white justify-center items-center w-full h-full">
                    <div className=" flex flex-col items-centers lg:items-start justify-center w-[450px] h-[382px]">
                        <p className=" lg:text-[28px] text-[25px] lg:text-left text-center" >SO, YOU WANT TO TRAVEL TO</p>
                        <p className=" text-[150px]">SPACE</p>
                        <p className=" text-[15px] font-thin leading-8">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

                    </div>

                </div>
                <div className=" flex items-center justify-center w-full h-full" >
                    <Link to={"/destination"} className=" flex justify-center items-center w-[250px] h-[250px] lg:w-[274px] lg:h-[274px] lg:mt-36 rounded-full bg-white   outline outline-0 hover:outline-[100px] outline-white/20 duration-500">
                        <p className="text-3xl tracking-[2px]">Explore</p>
                    </Link>

                </div>
            </div>

        </div>
    )

}

export default Home;
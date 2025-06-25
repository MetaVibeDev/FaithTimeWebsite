import { useEffect, useState } from "react";
import { AppStoreIcon, GooglePlayIcon } from "./icons";
import Lumi from "./lumi/Lumi";

export default function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <div className="relative overflow-hidden px-12 py-12 lg:px-[200px] md:px-[100px] w-full lg:h-[75vh] h-[35vh] bg-black bg-gradient-to-br from-[#FFBBEC] to-[#A9C9FF] flex justify-center">
        <div className="z-10 w-[1200px]  flex items-center">
            <div className="max-w-[42rem] md:text-start text-center ">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                    Your daily steps, your lamb's growth.
                </h1>
                <p className="sm:text-xl md:text-2xl text-gray-700 lg:mb-12 mb-4">
                    Start your journey with God—one day, one prayer at a time.
                </p>
                <div className=" flex-row justify-center  md:justify-start  items-center gap-4 flex">
                    <a
                        href="#"
                        className=" h-14 transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AppStoreIcon width={width > 800 ? 180 : 120} />
                    </a>
                    <a
                        href="#"
                        className="h-14 transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GooglePlayIcon width={width > 800 ? 180 : 120} />
                    </a>
                </div>
            </div>
        </div>
        <div style={{
            position: 'absolute',
            left: `${-width * 0.1}px`,
            bottom: `${width * 0}px`
        }}>
            <Lumi animation="sleep" size={width < 800 ? width / 2 : width / 3} color="orange" />
        </div>
        <div className="rotate-12" style={{
            position: 'absolute',
            left: width < 800 ? `${width * -0.15}px` : `${width * -0.07}px`,
            bottom: width < 800 ? `${width * -0.15}px` : `${width * -0.1}px`
        }}>
            <Lumi animation="wink" size={width < 800 ? width / 2 : width / 3} color="purple" />
        </div>
        <div style={{
            position: 'absolute',
            left: `${width * 0.44}px`,
            bottom: width < 800 ? `${width * -0.15}px` : `${width * -0.1}px`
        }}>
            <Lumi animation="love" size={width < 800 ? width / 2 : width / 3} color="blue" />
        </div>
        <div style={{
            position: 'absolute',
            left: `${width * 0.44}px`,
            bottom: `${width * -0.07}px`
        }}>
            <Lumi animation="sing" size={width < 800 ? width / 4 : width / 5} color="green" />
        </div>
        <div style={{
            position: 'absolute',
            right: `${width * -0.15}px`,
            bottom: `${width * -0.15}px`,
            transform: 'rotate(-12deg)'
        }}>
            <Lumi animation="happy" size={width / 2} color="white" />
        </div>

        <div style={{
            position: 'absolute',
            left: `${width * 0.65}px`,
            bottom: `${width * -0.03}px`,
        }} className="absolute z-1  hidden md:flex ">
            <img src="/star/god.png" />
        </div>
    </div >
}
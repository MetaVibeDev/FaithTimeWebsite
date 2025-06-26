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

    return <div className="sm:pt-0 relative overflow-hidden px-4 py-12 lg:px-[200px] md:px-[100px] w-full sm::h-[75vh] h-[100vh] bg-black bg-gradient-to-br from-[#FFBBEC] to-[#A9C9FF] flex justify-center">
        <div className="z-10 w-[1200px] flex sm:items-center flex-col sm:flex-row">
            <img className="sm:hidden flex w-48" src="/mobileApp/faithtimeicon.png" />
            <div className="max-w-[42rem] md:text-start text-center mt-24 sm:mt-0 ">

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                    Your daily steps, your lamb's growth.
                </h1>
                <p className="sm:text-xl md:text-2xl text-gray-700 lg:mb-12 mb-4">
                    Start your journey with God—one day, one prayer at a time.
                </p>
                <div className="mt-20 sm:mt-0 flex-col sm:flex-row justify-center  md:justify-start  items-center gap-8 sm:gap-4 flex">
                    <a
                        href="#"
                        className=" h-14 transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AppStoreIcon width={width > 800 ? 180 : 300} height={width < 800 ? 70 : 53} />
                    </a>
                    <a
                        href="#"
                        className="h-14 transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GooglePlayIcon width={width > 800 ? 180 : 300} height={width < 800 ? 70 : 53} />
                    </a>
                </div>
            </div>
        </div>
        <div style={{
            position: 'absolute',
            left: width < 800 ? `${-width * 0.3}px` : `${-width * 0.1}px`,
            bottom: `${width * 0}px`
        }}>
            <Lumi animation="sleep" size={width < 800 ? width : width / 3} color="orange" />
        </div>
        <div className="rotate-12" style={{
            position: 'absolute',
            left: width < 800 ? `${width * -0.3}px` : `${width * -0.07}px`,
            bottom: width < 800 ? `${width * -0.3}px` : `${width * -0.1}px`
        }}>
            <Lumi animation="wink" size={width < 800 ? width : width / 3} color="purple" />
        </div>
        <div
            className="-rotate-12 sm:rotate-0"
            style={{
                position: 'absolute',
                left: width < 800 ? `${width * 0.7}px` : `${width * 0.44}px`,
                bottom: width < 800 ? `${width * 0.2}px` : `${width * -0.1}px`
            }}>
            <Lumi animation="love" size={width < 800 ? width / 2 : width / 3} color="blue" />
        </div>
        <div style={{
            position: 'absolute',
            left: width < 800 ? `${width * 0.1}px` : `${width * 0.44}px`,
            bottom: width < 800 ? `${width * -0.15}px` : `${width * -0.07}px`
        }}>
            <Lumi animation="sing" size={width < 800 ? width / 2 : width / 5} color="green" />
        </div>
        <div style={{
            position: 'absolute',
            right: width < 800 ? `${width * -0.3}px` : `${width * -0.15}px`,
            bottom: width < 800 ? `${width * -0.3}px` : `${width * -0.15}px`,
            transform: 'rotate(-12deg)'
        }}>
            <Lumi animation="default" size={width < 800 ? width : width / 2.3} color="white" />
        </div>

        <div style={{
            position: 'absolute',
            left: `${width * 0.65}px`,
            bottom: `${width * -0.03}px`,
        }} className="absolute z-1  hidden md:flex ">
            <div className="absolute top-0 bottom-0 left-0 right-0 justify-center items-center">
                <div className="scale-150">
                    <img className="animate-spin [animation-duration:10s]" src="/mobileApp/glow.png" />
                </div>
            </div>

            <img className="relative" src="/star/god.png" />
        </div>
    </div >
}
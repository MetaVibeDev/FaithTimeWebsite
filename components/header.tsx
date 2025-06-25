import { AppStoreIcon, GooglePlayIcon } from "./icons";

export default function Header() {
    return <div className="relative overflow-hidden px-24 py-12 lg:px-[200px] md:px-[100px] w-full min-h-[75vh] bg-black bg-gradient-to-br from-[#FFBBEC] to-[#A9C9FF] flex justify-center">
        <div className="z-10 w-[1200px] flex items-center">
            <div className="max-w-[42rem] md:text-start text-center ">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                    Your daily steps, your lamb's growth.
                </h1>
                <p className="sm:text-xl md:text-2xl text-gray-700 mb-12">
                    Start your journey with God—one day, one prayer at a time.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start  items-center gap-4">
                    <a
                        href="#"
                        className="w-48 h-14 transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AppStoreIcon />
                    </a>
                    <a
                        href="#"
                        className="w-48 h-14 transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GooglePlayIcon />
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute z-1 -bottom-4 right-36 lg:right-48 md:right-24 h-[90%] hidden md:flex ">
            <img src="/star/god.png" />
        </div>
    </div>
}
import { AppStoreIcon, GooglePlayIcon } from "./icons";

export default function Download() {
    return (
        <div className="w-full  relative overflow-hidden">
            {/* 渐变背景 */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-200 opacity-30 blur-3xl"></div>
                <div className="absolute bottom-[-100px] right-[20%] w-[400px] h-[400px] rounded-full bg-pink-200 opacity-30 blur-3xl"></div>
            </div>

            {/* 主要内容 */}
            <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Your faith deserves a space.
                    <br />
                    Start journaling today !
                </h1>

                {/* 下载按钮容器 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
                    {/* App Store 按钮 */}
                    <a href="#" className="w-[200px] transition-transform hover:scale-105">
                        <AppStoreIcon />
                    </a>

                    {/* Google Play 按钮 */}
                    <a href="#" className="w-[200px] transition-transform hover:scale-105">
                        <GooglePlayIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}
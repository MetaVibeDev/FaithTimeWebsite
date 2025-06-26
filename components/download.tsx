import { AppStoreIcon, GooglePlayIcon } from "./icons";

export default function Download() {
    return (
        <div className="w-full relative overflow-hidden bg-white md:py-32 py-12">
            {/* 渐变背景 */}
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                <img src="/star/colorful-ball.png" className="" />
            </div>


            {/* 主要内容 */}
            <div className="relative max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-black">
                    Your faith deserves a space.
                    <br />
                    Start journaling today !
                </h1>

                {/* 下载按钮容器 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
                    {/* App Store 按钮 */}
                    <a href="https://apps.apple.com/app/faithtime/id6503560893" className="w-[200px] transition-transform hover:scale-105">
                        <AppStoreIcon />
                    </a>

                    {/* Google Play 按钮 */}
                    <a href="https://play.google.com/store/apps/details?id=com.metavibe.faithtime&gl=SG" className="w-[200px] transition-transform hover:scale-105">
                        <GooglePlayIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}
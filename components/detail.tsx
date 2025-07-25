import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import Lumi from "./lumi/Lumi";

export default function Detail() {
    const [width, setWidth] = useState(0);
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const swiperRefs = useRef<(SwiperType | undefined)[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const arr1 = ["/images/screen-1.png", "/images/screen-2.png", "/images/screen-3.png", "/images/screen-4.png"];
    const arr2 = ["/images/screen-5.png", "/images/screen-6.png", "/images/screen-7.png"];
    const arr3 = ["/images/screen-8.png", "/images/screen-9.png", "/images/screen-10.png"];
    const arr4 = ["/images/screen-11.png", "/images/screen-12.png"];

    const handleSectionMouseEnter = (index: number) => {
        setActiveSection(index);
        if (swiperRefs.current[index]?.autoplay) {
            swiperRefs.current[index]?.autoplay?.resume();
        }
    };

    const handleSectionMouseLeave = (index: number) => {
        setActiveSection(null);
        if (swiperRefs.current[index]?.autoplay) {
            swiperRefs.current[index]?.autoplay?.pause();
        }
    };

    // 添加点击切换函数
    const handleImageClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
        // 阻止事件冒泡，避免与其他点击事件冲突
        e.stopPropagation();

        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;

        // 如果点击位置在左半部分，切换到上一张；否则切换到下一张
        if (x < rect.width / 2) {
            swiperRefs.current[index]?.slidePrev();
        } else {
            swiperRefs.current[index]?.slideNext();
        }
    };

    return <div className="w-full lg:px-16 flex justify-center bg-white overflow-hidden ">
        <div className="relative w-[1200px]">
            <div className="font-bold lg:text-[56px] px-8 lg:px:0 text-3xl text-black text-center lg:mt-[88px] mt-12">Faith-Fueled Features You'll Love</div>
            <div className="font-normal text-[16px] mt-8 px-8 lg:px:0 text-black text-center">Here, you will have a lamb who grows with you—your reflection in Christ.</div>
            <div className="relative w-full">
                <img src="/star/mainBg.png" />
                <div className="w-full absolute md:top-24 top-16 flex flex-col lg:gap-64 md:gap-64 sm:gap-12 gap-8 px-4">
                    <section
                        className="relative w-full px-4"
                        onMouseEnter={() => handleSectionMouseEnter(0)}
                        onMouseLeave={() => handleSectionMouseLeave(0)}
                    >
                        <div className="absolute z-2 -top-48 right-0 hidden md:flex">
                            <Lumi animation="love" color="purple" size={300} isPlaying={activeSection === 0} />
                        </div>
                        <div className="relative z-2 w-full mx-auto flex flex-row items-center lg:items-start gap-12 ">
                            <div className="md:w-1/2 w-3/5 space-y-6 flex-col flex gap-4" >
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold text-black" style={{ lineHeight: width > 800 ? '2.5rem' : "1.5rem" }}>Walk the Path as the Little Lamb — Grow, Reflect, and Glow in Faith!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">We creates a warm and mindful space for your spiritual growth. With Devotion Tracking, you'll build a steady, devout routine. Day & Night Themes set the mood for prayer, morning to night. And your animated lamb? It cheers you on, celebrates your progress, and grows with you — a joyful reminder that faith is a journey, not a checklist.</p>
                                <div className="flex justify-start">
                                    <button onClick={() => typeof window !== 'undefined' && (window.location.href = '#download')} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div
                                    className="border-4 border-solid border-black rounded-3xl w-[80%] md:w-[50%] overflow-hidden cursor-pointer"
                                    onClick={(e) => handleImageClick(0, e)}
                                >
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: false
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRefs.current[0] = swiper;
                                        }}
                                        className="testimonials-swiper !overflow-visible"
                                    >
                                        {arr1.map((item) => (
                                            <SwiperSlide key={item}>
                                                <img src={item} alt="FaithTime App Screenshot" className="w-full h-full object-cover" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第二个轮播图 */}
                    <section
                        className="relative w-full px-4"
                        onMouseEnter={() => handleSectionMouseEnter(1)}
                        onMouseLeave={() => handleSectionMouseLeave(1)}
                    >
                        <div className="absolute z-2 -top-48 md:left-0 hidden md:flex">
                            <Lumi animation="happy" color="orange" size={300} isPlaying={activeSection === 1} />
                        </div>
                        <div className="relative z-1 max-w-7xl mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div
                                    className="border-4 border-solid border-black rounded-3xl md:w-[50%] overflow-hidden w-[80%] cursor-pointer"
                                    onClick={(e) => handleImageClick(1, e)}
                                >
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            stopOnLastSlide: false,
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRefs.current[1] = swiper;
                                        }}
                                        className="testimonials-swiper w-full h-full !overflow-visible"
                                    >
                                        {arr2.map((item) => (
                                            <SwiperSlide className="w-full h-full" key={item}>
                                                <img className="w-full h-full object-cover" src={item} alt="FaithTime App Screenshot" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-3/5 space-y-6 flex-col flex gap-4">
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black" style={{ lineHeight: width > 800 ? '2.5rem' : "1.5rem" }}>You're Not Alone — Share, Pray, Connect!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">This is your space to open up, ask for prayer, and lift others up too. Share what's on your heart, join meaningful conversations, or offer encouragement through prayer. Here, faith becomes community — real, supportive, and alive.</p>
                                <div className="flex justify-end">
                                    <button onClick={() => typeof window !== 'undefined' && (window.location.href = '#download')} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第三个轮播图 */}
                    <section
                        className="relative w-full px-4"
                        onMouseEnter={() => handleSectionMouseEnter(2)}
                        onMouseLeave={() => handleSectionMouseLeave(2)}
                    >
                        <div className="absolute z-2 -top-48 right-0 hidden md:flex">
                            <Lumi animation="doubt" color="green" size={300} isPlaying={activeSection === 2} />
                        </div>
                        <div className="relative z-2 w-full mx-auto flex flex-row items-center lg:items-start gap-12 ">
                            <div className="md:w-1/2 w-3/5 space-y-6 flex-col flex gap-4" >
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold text-black" style={{ lineHeight: width > 800 ? '2.5rem' : "1.5rem" }}>Daily Devotions — Grow Closer to God Every Day!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">Strengthen your faith with our daily devotions. Each day brings new insights, prayers, and reflections to deepen your spiritual journey. Set aside time for God and watch your relationship with Him flourish through consistent, meaningful devotional practice.</p>
                                <div className="flex justify-start">
                                    <button onClick={() => typeof window !== 'undefined' && (window.location.href = '#download')} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div
                                    className="border-4 border-solid border-black rounded-3xl w-[80%] md:w-[50%] overflow-hidden cursor-pointer"
                                    onClick={(e) => handleImageClick(2, e)}
                                >
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: false
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRefs.current[2] = swiper;
                                        }}
                                        className="testimonials-swiper !overflow-visible"
                                    >
                                        {arr3.map((item) => (
                                            <SwiperSlide key={item}>
                                                <img src={item} alt="FaithTime App Screenshot" className="w-full h-full object-cover" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第四个轮播图 */}
                    <section
                        className="relative w-full px-4"
                        onMouseEnter={() => handleSectionMouseEnter(3)}
                        onMouseLeave={() => handleSectionMouseLeave(3)}
                    >
                        <div className="absolute z-2 -top-48 md:left-0 hidden md:flex">
                            <Lumi animation="think" color="blue" size={300} isPlaying={activeSection === 3} />
                        </div>
                        <div className="relative z-1 max-w-7xl mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div
                                    className="border-4 border-solid border-black rounded-3xl md:w-[50%] overflow-hidden w-[80%] cursor-pointer"
                                    onClick={(e) => handleImageClick(3, e)}
                                >
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            stopOnLastSlide: false,
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRefs.current[3] = swiper;
                                        }}
                                        className="testimonials-swiper w-full h-full !overflow-visible"
                                    >
                                        {arr4.map((item) => (
                                            <SwiperSlide className="w-full h-full" key={item}>
                                                <img className="w-full h-full object-cover" src={item} alt="FaithTime App Screenshot" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-3/5 space-y-6 flex-col flex gap-4">
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black" style={{ lineHeight: width > 800 ? '2.5rem' : "1.5rem" }}>Bible Study Made Simple — Discover God's Word!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">Dive into Scripture with our easy-to-use Bible study tools. Access verses, take notes, and explore commentaries all in one place. Whether you're a beginner or seasoned believer, our app makes studying the Bible accessible, engaging, and transformative.</p>
                                <div className="flex justify-end">
                                    <button onClick={() => typeof window !== 'undefined' && (window.location.href = '#download')} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>;
}
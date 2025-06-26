import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import Lumi from "./lumi/Lumi";

export default function Detail() {
    const [width, setWidth] = useState(window.innerWidth);
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const swiperRefs = useRef<(SwiperType | undefined)[]>([]);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const arr1 = ["/mobileApp/screen-1.png", "/mobileApp/screen-2.png", "/mobileApp/screen-3.png", "/mobileApp/screen-4.png"];
    const arr2 = ["/mobileApp/screen-5.png", "/mobileApp/screen-6.png", "/mobileApp/screen-7.png"];
    const arr3 = ["/mobileApp/screen-8.png", "/mobileApp/screen-9.png", "/mobileApp/screen-10.png"];
    const arr4 = ["/mobileApp/screen-11.png", "/mobileApp/screen-12.png"];

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
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black">Walk the Path as the Little Lamb — Grow, Reflect, and Glow in Faith!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">We creates a warm and mindful space for your spiritual growth. With Devotion Tracking, you'll build a steady, devout routine. Day & Night Themes set the mood for prayer, morning to night. And your animated lamb? It cheers you on, celebrates your progress, and grows with you — a joyful reminder that faith is a journey, not a checklist.</p>
                                <div className="flex justify-start">
                                    <button onClick={() => window.location.href = '#download'} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl w-[80%] md:w-[50%] overflow-hidden  ">
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
                                                <img src={item} alt="FaithTime App Screenshot" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="relative w-full  px-4"
                        onMouseEnter={() => handleSectionMouseEnter(1)}
                        onMouseLeave={() => handleSectionMouseLeave(1)}
                    >
                        <div className="absolute z-2 -top-48 md:left-0 hidden md:flex">
                            <Lumi animation="happy" color="orange" size={300} isPlaying={activeSection === 1} />
                        </div>
                        <div className="relative z-1 max-w-7xl mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-2/5  flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl md:w-[50%] overflow-hidden w-[80%]">
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
                                                <img className="w-full h-full" src={item} alt="FaithTime App Screenshot" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-3/5 space-y-6 flex-col flex gap-4">
                                <h2 className="lg:text-[32px] md:text-xl text-sm  font-semibold leading-tight text-black">You're Not Alone — Share, Pray, Connect!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">This is your space to open up, ask for prayer, and lift others up too. Share what's on your heart, join meaningful conversations, or offer encouragement through prayer. Here, faith becomes community — real, supportive, and alive.</p>
                                <div className="flex justify-end">
                                    <button onClick={() => window.location.href = '#download'} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="relative w-full px-4"
                        onMouseEnter={() => handleSectionMouseEnter(2)}
                        onMouseLeave={() => handleSectionMouseLeave(2)}
                    >
                        <div className="absolute z-2 -top-48 right-0 hidden md:flex">
                            <Lumi animation="doubt" color="white" size={300} isPlaying={activeSection === 2} />
                        </div>
                        <div className="relative w-full mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-3/5 space-y-6 flex-col flex gap-4">
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black">Feeling lost? Let God's word bring daily strength</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">Manna delivers a timely word — handpicked for your heart. It's like a divine nudge that comforts, strengthens, and keeps you anchored in His love, one day at a time.</p>
                                <div className="flex justify-start">
                                    <button onClick={() => window.location.href = '#download'} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-2/5  flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl md:w-[50%] overflow-hidden w-[80%]">
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
                                            swiperRefs.current[2] = swiper;
                                        }}
                                        className="testimonials-swiper !overflow-visible w-full h-full"
                                    >
                                        {arr3.map((item) => (
                                            <SwiperSlide key={item}>
                                                <img src={item} className="w-full h-full" alt="FaithTime App Screenshot" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="relative w-full  px-4"
                        onMouseEnter={() => handleSectionMouseEnter(3)}
                        onMouseLeave={() => handleSectionMouseLeave(3)}
                    >
                        <div className="absolute z-2 -top-48 md:left-0 hidden md:flex">
                            <Lumi animation="think" color="green" size={300} isPlaying={activeSection === 3} />
                        </div>
                        <div className="relative w-full mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl w-[80%] md:w-[50%]  overflow-hidden">
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
                                        className="testimonials-swiper !overflow-visible"
                                    >
                                        {arr4.map((item) => (
                                            <SwiperSlide key={item}>
                                                <img src={item} alt="FaithTime App Screenshot" className="w-full h-full object-cover" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-3/5 space-y-6 flex-col flex gap-4">
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black">Got Faith Questions? Ask Away — Bible Chat's Got You!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">Wondering about a verse? Wrestling with a tough question? Bible Chat is your on-call faith companion — always ready with wise, Bible-based answers that make things clearer (and deeper).</p>
                                <div className="flex justify-end">
                                    <button onClick={() => window.location.href = '#download'} className="bg-[#8A58FF] text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </div>;
}
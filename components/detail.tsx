import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
export default function Detail() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const swiperRef = useRef<SwiperType>();
    const arr1 = ["/mobileApp/screen-1.png", "/mobileApp/screen-2.png", "/mobileApp/screen-3.png", "/mobileApp/screen-4.png"]
    const arr2 = ["/mobileApp/screen-5.png", "/mobileApp/screen-6.png", "/mobileApp/screen-7.png"]
    const arr3 = ["/mobileApp/screen-8.png", "/mobileApp/screen-9.png", "/mobileApp/screen-10.png"]
    const arr4 = ["/mobileApp/screen-11.png", "/mobileApp/screen-12.png"]
    return <div className="w-full flex justify-center bg-white ">
        <div className="relative w-[1200px]">
            <div className="font-bold lg:text-[56px] px-8 lg:px:0 text-3xl text-black text-center lg:mt-[88px] mt-12">Faith-Fueled Features You'll Love</div>
            <div className="font-normal text-[16px] mt-8 px-8 lg:px:0 text-black text-center">Here, you will have a lamb who grows with you—your reflection in Christ.</div>
            <div className="relative w-full">
                <img src="/star/mainBg.png" />
                <div className="w-full absolute lg:top-24 top-8 px-8 lg:px-0 ">
                    <section className="w-full md:py-48 lg:py-16 py-4 px-4">
                        <div className="w-full mx-auto flex flex-row items-center lg:items-start  gap-12">
                            <div className="md:w-1/2 w-3/5 space-y-6">
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black">Walk the Path as the Little Lamb — Grow, Reflect, and Glow in Faith!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">We creates a warm and mindful space for your spiritual growth. With Devotion Tracking, you'll build a steady, devout routine. Day & Night Themes set the mood for prayer, morning to night. And your animated lamb? It cheers you on, celebrates your progress, and grows with you — a joyful reminder that faith is a journey, not a checklist.</p>
                                <button className="bg-purple-600 text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                            </div>
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl w-full md:w-[50%] overflow-hidden  ">
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        className="testimonials-swiper !overflow-visible"
                                    >
                                        {arr1.map((item) => {
                                            return (
                                                <SwiperSlide key={item}>
                                                    <img src={item} alt="FaithTime App Screenshot" />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full lg:py-24 py-6 px-4">
                        <div className="max-w-7xl mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-2/5  flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl md:w-[50%] overflow-hidden w-full">
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        className="testimonials-swiper !overflow-visible"
                                    >
                                        {arr2.map((item) => {
                                            return (
                                                <SwiperSlide key={item} className="!overflow-visible">
                                                    <img src={item} alt="FaithTime App Screenshot" className="w-full" />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-3/5 space-y-6">
                                <h2 className="lg:text-[32px] md:text-xl text-sm  font-semibold leading-tight text-black">You're Not Alone — Share, Pray, Connect!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">This is your space to open up, ask for prayer, and lift others up too. Share what's on your heart, join meaningful conversations, or offer encouragement through prayer. Here, faith becomes community — real, supportive, and alive.</p>
                                <button className="bg-purple-600 text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                            </div>
                        </div>
                    </section>

                    <section className="w-full md:py-48 lg:py-24 py-0 px-4">
                        <div className="max-w-7xl mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-3/5 space-y-6">
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black">Feeling lost? Let God's word bring daily strength</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">Manna delivers a timely word — handpicked for your heart. It's like a divine nudge that comforts, strengthens, and keeps you anchored in His love, one day at a time.</p>
                                <button className="bg-purple-600 text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                            </div>
                            <div className="md:w-1/2 w-2/5  flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl md:w-[50%] overflow-hidden w-full">
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        className="testimonials-swiper !overflow-visible"
                                    >
                                        {arr3.map((item) => {
                                            return (
                                                <SwiperSlide key={item} className="!overflow-visible h-full">
                                                    <img src={item} alt="FaithTime App Screenshot" className="w-full h-full" />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full lg:py-48 py-4 px-4">
                        <div className="max-w-7xl mx-auto flex flex-row items-center lg:items-start gap-12">
                            <div className="md:w-1/2 w-2/5 flex justify-center" >
                                <div className="border-4 border-solid border-black rounded-3xl md:w-[50%] overflow-hidden w-full">
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        className="testimonials-swiper !overflow-visible"
                                    >
                                        {arr4.map((item) => {
                                            return (
                                                <SwiperSlide key={item} className="!overflow-visible">
                                                    <img src={item} alt="FaithTime App Screenshot" className="w-full h-full" />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-3/5 space-y-6">
                                <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold leading-tight text-black">Got Faith Questions? Ask Away — Bible Chat's Got You!</h2>
                                <p className="lg:text-lg text-sm text-[#2F106D] md:flex hidden">Wondering about a verse? Wrestling with a tough question? Bible Chat is your on-call faith companion — always ready with wise, Bible-based answers that make things clearer (and deeper).</p>
                                <button className="bg-purple-600 text-white text-[10px] md:text-xl md:px-8 md:py-3 p-3 rounded-full hover:bg-purple-700 transition-colors">Get Started</button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </div >
}
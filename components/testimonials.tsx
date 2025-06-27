import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lynn688",
    date: "2025-05-14",
    rating: 4,
    title: "Very Good", // 添加标题
    comment: "Beautiful UI design and easy to use!",
    avatar: "/star/avatar1.png",
  },
  {
    id: 2,
    name: "destany",
    date: "2025-05-17",
    rating: 5,
    title: "10/10!!!", // 添加标题
    comment: "10/10 Great application I love it!!",
    avatar: "/star/avatar2.png",
  },
  {
    id: 3,
    name: "Thomas Smith",
    date: "2025-04-10",
    rating: 5,
    title: "This app is very lovely!", // 添加标题
    comment: "I really think this app could help me with this relationship with God, and especially Jesus Christ! I really think this app is very cool and fun to play with. And it also could be used for your goals. I give this app 5 stars because I think this app is very kind. Thank you to the developer of this app. Pls notice me!",
    avatar: "/star/avatar7.png",
  },
  {
    id: 4,
    name: "Lvvvlin",
    date: "2025-04-10",
    rating: 4,
    title: "Nice app!!! Nice app!", // 添加标题
    comment:
      "This app allows me to experience God's grace and strength every day. The content is a source of inspiration and love, and the interface is simple and warm!",
    avatar: "/star/avatar4.png",
  },
  {
    id: 5,
    name: "Martin Smith",
    date: "2025-03-15",
    rating: 5,
    title: "I love it!", // 添加标题
    comment: "I love it!",
    avatar: "/star/avatar5.png",
  },
  {
    id: 6,
    name: "dfhhh45411",
    date: "2025-03-15",
    rating: 5,
    title: "Would recommend", // 添加标题
    comment: "very Good app For prayer",
    avatar: "/star/avatar6.png",
  },
];

export default function Testimonials() {
  const [itemsToShow, setItemsToShow] = useState(5);
  const swiperRef = useRef<SwiperType>();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 640) {
          // sm
          setItemsToShow(1);
        } else if (width < 1024) {
          // md
          setItemsToShow(2);
        } else if (width < 1280) {
          // lg
          setItemsToShow(3);
        } else if (width < 1536) {
          // xl
          setItemsToShow(4);
        } else {
          // 2xl
          setItemsToShow(5);
        }
      }
    };

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-[#FFBBEC] to-[#A9C9FF] py-16 overflow-hidden">
      <div className="w-full mx-auto md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          What our customers are saying about us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Here, you will have a lamb who grows with you—your reflection in
          Christ.
        </p>

        <div className="relative overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={itemsToShow}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="testimonials-swiper !overflow-visible justify-center"
            centeredSlides={itemsToShow === 1}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!overflow-visible">
                <div className="min-w-[200px] max-w-[400px] h-[350px] overflow-auto scrollbar-hide bg-white hover:bg-[#FFB020] rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:z-20">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-black">
                    {testimonial.title}
                  </h4>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {testimonial.comment}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full flex justify-center mt-8 gap-24">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-[#8A58FF] hover:text-white bg-white rounded-full p-2 shadow-lg hover:bg-[#8A58FF] transition-all z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-[#8A58FF] hover:text-white bg-white rounded-full p-2 shadow-lg hover:bg-[#8A58FF] transition-all z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

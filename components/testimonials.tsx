import { useState } from 'react';

interface Testimonial {
    id: number;
    name: string;
    date: string;
    rating: number;
    comment: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Lynn688",
        date: "2023-05-14",
        rating: 4,
        comment: "Beautiful UI design and easy to use!",
        avatar: "/avatars/avatar1.jpg"
    },
    {
        id: 2,
        name: "destany077744444",
        date: "2023-05-17",
        rating: 5,
        comment: "10/10 Great application I love it!!",
        avatar: "/avatars/avatar2.jpg"
    },
    {
        id: 3,
        name: "Thomas Smith",
        date: "2023-04-10",
        rating: 5,
        comment: "I had the pleasure of working with this amazing Digital Agency, and it was a fantastic experience.",
        avatar: "/avatars/avatar3.jpg"
    },
    {
        id: 4,
        name: "Lvvvlin",
        date: "2023-04-10",
        rating: 4,
        comment: "This app allows me to experience God's grace and strength every day. The content is a source of inspiration and love, and the interface is simple and warm!",
        avatar: "/avatars/avatar4.jpg"
    },
    {
        id: 5,
        name: "Martin Smith",
        date: "2023-03-15",
        rating: 5,
        comment: "I love it!",
        avatar: "/avatars/avatar5.jpg"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // 一次显示3个评价

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= testimonials.length - (itemsToShow - 1) ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? testimonials.length - itemsToShow : prevIndex - 1
        );
    };

    return (
        <div className="w-full bg-gradient-to-b from-[#FFBBEC] to-[#A9C9FF] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-black">What our customers are saying about us</h2>
                <p className="text-center text-gray-600 mb-12">Here, you will have a lamb who grows with you—your reflection in Christ.</p>

                <div className="relative">
                    <div className="flex gap-6 overflow-hidden">
                        {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-1 bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                                    </div>
                                </div>
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700">{testimonial.comment}</p>
                            </div>
                        ))}
                    </div>

                    {/* 导航按钮 */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
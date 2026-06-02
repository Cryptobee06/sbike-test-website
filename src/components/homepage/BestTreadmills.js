"use client";
import { useTranslations } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const treadmillsData = [
  {
    id: "sportstech",
    brand: "Sportstech",
    model: "Sportstech SX175 SpeedBike",
    image: "/Model/Sportstech sx175 model.webp",
    rating: 4.9,
    badge: "testWinner",
    link: "https://www.sportstech.de/speedbike/sx175",
  },
  {
    id: "Citysports",
    brand: "Peloton",
    model: "Peloton Bike+",
    image: "/Model/Peloton bike model.webp",
    rating: 4.0,
    badge: "",
    link: "#",
  },
  {
    id: "Superun",
    brand: "NordicTrack",
    model: "NordicTrack S24 Studio Bike",
    image: "/Model/Nordictrack bike model.webp",
    rating: 3.9,
    badge: "",
    link: "#",
  },
  {
    id: "sportstech",
    brand: "Sportstech",
    model: "Sportstech X150 Ergometer",
    image: "/Model/Sportstech X150 model.webp",
    rating: 4.9,
    badge: "testWinner",
    link: "https://www.sportstech.de/ergometer/x150",
  },
  {
    id: "Cursor",
    brand: "Ultrasport",
    model: "Ultrasport F-Bike",
    image: "/Model/ultrasport bike model.jpg",
    rating: 3.8,
    badge: "",
    link: "#",
  },
  {
    id: "Cazvian",
    brand: "SportPlus",
    model: "SportPlus SP-HT-9600-iE",
    image: "/Model/Sportplus bike model.webp",
    rating: 3.7,
    badge: "",
    link: "#",
  },
];

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(full)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#C8A96E]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {half && (
        <svg className="w-3.5 h-3.5 text-[#C8A96E] opacity-50" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {[...Array(empty)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-[0.65rem] text-neutral-400 ml-1.5 font-semibold">{rating}</span>
    </div>
  );
};

export default function BestTreadmills() {
  const t = useTranslations("homepage.bestTreadmills");

  return (
    <section id="best-treadmills" className="bg-[#F5F5F0] py-24 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            {/* <span className="eyebrow block mb-4">Top Picks</span> */}
            <h2 className="heading-section text-neutral-900">
              {t("title")}
            </h2>
          </div>
          <Link href="/reviews">
            <span className="btn-primary text-xs py-3.5 px-8 flex-shrink-0">
              View All Reviews
            </span>
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={2}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          observer={true}
          observeParents={true}
          breakpoints={{
            768:  { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="pb-14"
        >
          {treadmillsData.map((item, index) => (
            <SwiperSlide key={`${item.id}-${item.model}-${index}`}>
              <div className="bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] flex flex-col overflow-hidden card-height group">

                {/* Image area */}
                <div className="relative bg-neutral-50 flex-shrink-0" style={{ height: '260px' }}>
                  {item.badge === "testWinner" && (
                    <span className="absolute top-4 left-4 z-10 bg-neutral-900 text-white text-[0.55rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1">
                      {t("sportstech.badge")}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={`${item.brand} ${item.model}`}
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow border-t border-neutral-100">
                  <div className="flex-grow">
                    <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">{item.brand}</p>
                    <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-3">{item.model}</h3>
                    <StarRating rating={item.rating} />
                  </div>
                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <a
                      href={item.link}
                      target={item.link !== "#" ? "_blank" : "_self"}
                      rel={item.link !== "#" ? "noopener noreferrer" : ""}
                      className="block w-full bg-neutral-900 hover:bg-neutral-700 text-white text-center py-3.5 text-[0.65rem] font-bold tracking-[0.18em] uppercase transition-colors duration-200"
                    >
                      {t("buyNow")}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

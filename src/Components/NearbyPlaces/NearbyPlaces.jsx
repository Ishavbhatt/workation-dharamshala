"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./NearbyPlaces.module.scss";
import Icons from "../Icons/Icons";
import SectionHeading from "../SectionHeading/SectionHeading";

const placesData = [
  {
    title: "Tea Garden",
    image: "/images/places/tea-garden-dharamshala.webp",
  },
  {
    title: "Bhagsu Falls",
    image: "/images/places/bhagsu-waterfall.webp",
  },
  {
    title: "Triund",
    image: "/images/tours/triund-trek-dharamshala.webp",
  },
  {
    title: "Dal Lake",
    image: "/images/places/dal-lake-dharamshala.webp",
  },
  {
    title: "Naddi View Point",
    image: "/images/areas/naddi.webp",
  },
];

export default function NearbyPlaces() {
  return (
    <section className={styles.nearby_section}>
      <div className={styles.nearby_section_container}>

        <SectionHeading
          label="NEARBY PLACES"
          title="Places to discover around Dharamshala"
        />

        <div className={styles.slider_wrapper}>

          <button className={`${styles.slider_btn} nearby_prev`}>
            <Icons
              name="arrowLeft"
              size={20}
            />
          </button>

          <button className={`${styles.slider_btn} nearby_next`}>
            <Icons
              name="arrowRight"
              size={20}
            />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={18}
            slidesPerView={4}
            navigation={{
              prevEl: ".nearby_prev",
              nextEl: ".nearby_next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.25,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 2.2,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            className={styles.nearby_slider}
          >

            {placesData.map((item, index) => (
              <SwiperSlide key={index}>

                <div className={styles.place_card}>

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 270px"
                    className={styles.place_image}
                  />
                  <div className={styles.image_overlay}></div>
                  <div className={styles.place_content}>
                    <h3 className={`font_heading fw_400 heading_3 ${styles.place_title}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
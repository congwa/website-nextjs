"use client";
import React, { useRef, useState } from "react";
import Swiper,{SwipeRef} from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';
// import Styles from './BannerClient.module.css';

function BannerClient({list}) {
  const swiperRef = useRef<SwipeRef>(null);
  const [index, setIndex] = useState<any>();

  const swipeTo = () => {
    const swiperInstance = swiperRef.current;
    const currPage: string = index * 1 + '';
    swiperInstance?.swipeTo(parseInt(currPage, 10));
  };

  const prev = () => {
    const swiperInstance = swiperRef.current;
    swiperInstance?.prev();
  };

  const next = () => {
    const swiperInstance = swiperRef.current;
    swiperInstance?.next();
  };

  const onChange = (currPage: number, prevPage: number) => {
    // console.log(currPage, prevPage);
  };

  return (
    <div className="py-4">
      <Swiper
        className="swiper"
        autoPlay={3000}
        selectedIndex={0}
        showIndicators={true}
        indicator={null}
        dots={null}
        touchable={true}
        loop={true}
        ref={swiperRef}
        onChange={onChange}
      >
        {list.map((item: string, key) => (
          <div key={key} className="bg-cover bg-center w-full h-[200px] ss:h-[500px]" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerClient;
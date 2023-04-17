"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';


const BannerClient = (props) => {
  const list = props.list;
  useEffect(() => {
    // gsap动画
  }, [])

  return <section className='bannerSection ss:h-[300px] md:h-[500px] relative'>
    {
      list.map(ban => {
        return <div key={ban.id}>
          <Image fill src={ban.imageUrl} alt={ban.title} />
        </div>
      })
    }
    
  </section>
}

export default BannerClient;


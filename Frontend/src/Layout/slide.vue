<template>
    <div class="fix-container">
        <div  >
            <div>
                <swiper
                    :spaceBetween="30"
                    :centeredSlides="true"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    }"
                    :pagination="{
                    clickable: true,
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <img src="/Banner/banner1.webp" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/Banner/banner3.webp" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/Banner/home_banner_4.webp" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/Banner/images_banner5.jpg" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation];
</script>

<style>

.swiper {
  width: 100%;
  height: 60vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
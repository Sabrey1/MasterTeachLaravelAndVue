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
                        <img src="" alt="">
                    </swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
                </swiper>
            </div>
           
        </div>
    </div>
</template>
<script setup>
import Card from 'primevue/card';

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
  height: 100%;
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
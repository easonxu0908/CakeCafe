<template>
  <div class="container-fluid swiper-container d-none d-md-block">
    <swiper :options="swiperOption" class="topSwiper">
      <swiper-slide>
        <div class="slide slide1"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide slide2"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide slide3"></div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
import $ from "jquery";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "topSilder",
  data() {
    return {
      swiperOption: {
        loop: true,
        spaceBetween: 30,

        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    $(".topSwiper").on("mouseenter", function() {
      this.swiper.autoplay.stop();
    });
    $(".topSwiper").on("mouseleave", function() {
      this.swiper.autoplay.start();
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 300px;
}
.slide {
  height: 100%;
  background-position: center center;
  background-size: cover;
}
.slide1 {
  background-image: url("../assets/img/mainvisual.jpg");
}
.slide2 {
  background-image: url("../assets/img/mainvisual.jpg");
}
.slide3 {
  background-image: url("../assets/img/mainvisual.jpg");
}
</style>
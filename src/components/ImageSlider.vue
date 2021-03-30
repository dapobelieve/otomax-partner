<template>
  <main>
    <div class="slide-content rounded white pb-1">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="image in images" :key="image">
          <img
            :src="image"
            width="100%"
            height="100%"
            style="object-fit:cover"
          />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination mb-8" slot="pagination"></div>
      <div class="d-flex mx-11 mb-5">
        <div>
          <h3 class="mb-0 font-weight-bold text-black">{{ details.make }}</h3>
          <p class="mb-0 text-gray">{{ details.model }}</p>
        </div>
        <v-spacer></v-spacer>
        <div>
          <h3 class="font-weight-bold mb-0 text-blue">{{ (details.pricing && details.pricing.amount) || 1000}}</h3>
          <p class="mb-0 text-gray">{{ (details.pricing && details.pricing.duration) || "Monthly" }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "SwiperExampleAutoplay",
  props: {
    images: {required: true, type: Array},
    details: {required: true, type: Object}
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-content {
  display: block;
  width: 100%;
  overflow-x: hidden;
  .swiper {
    height: 300px;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
    }
  }
  .swiper-pagination {
    position: unset !important;
    text-align: center !important;
    transition: 300ms opacity !important;
    transform: translate3d(0, 0, 0) !important;
    z-index: 10;
  }
}


</style>

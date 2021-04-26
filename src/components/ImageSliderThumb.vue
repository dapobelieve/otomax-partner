<template>
  <main style="position:relative">
    <div 
      class='editable'
      v-if="editable"
    >
      <a :href='editLink'><img :src="require('@/assets/images/Group8338.png')" width="30"  style="cursor: pointer" /></a>
    </div>

    <div class="thumb-example mb-8 w-100">
      <swiper
        class="swiper gallery-top"
        :options="swiperOption"
        ref="swiperTop"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img
            :src="image"
            class="rounded"
            width="100%"
            height="100%"
            style="object-fit: cover"
          />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination mb-8" slot="pagination"></div>
      <div class="d-inline-flex mw-100">
        <swiper
          class="swiper gallery-thumbs"
          :options="swiperOptionThumbs"
          ref="swiperThumbs"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img
              :src="image"
              class="rounded"
              width="80"
              height="80"
              style="object-fit: cover"
            />
          </swiper-slide>
        </swiper>
        <div
          class=" rounded d-flex align-center ml-2 bg-mid-gray clickable"
          style="width: 80px; height: 80px;"
        >
          <p class="mb-0 text-white text-center w-100 clickable">View all</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "SwiperExampleThumbsGallery",
  props: {
    images: { required: true, type: Array },
    editable: { required: false, default: true, type: Boolean },
    editLink: { type: String,  }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOptionThumbs: {
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 2,
        centeredSlides: false,
        slidesPerView: "auto",
        slideToClickedSlide: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/color";
.thumb-example {
  height: 480px;
}

.swiper-pagination {
  position: unset !important;
  text-align: center !important;
  transition: 300ms opacity !important;
  transform: translate3d(0, 0, 0) !important;
  z-index: 10;
}
.editable {
  position: absolute;
  z-index: 3433434;
  top: 20px;
  right: 30px;
  background: $blue;
  padding: 0;
  border-radius: 15px;
  line-height: 10px;
}

.rounded {
  border-radius: 14px !important;
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
  }
  &.gallery-thumbs .swiper-slide {
    width: 22%;
    height: 100%;
    cursor: pointer;
  }
}
</style>

<template>
  <main class="container" style="max-width:1300px;">
    <div class="d-flex justify-center position-relative stick-me">
      <div
        style="width: 100%; height: 100%"
        class="px-9 pt-4 pb-10 position-relative"
      >

        <vue-sticky-sidebar class="sidebar" containerSelector=".stick-me" innerWrapperSelector='stick' :topSpacing='90'>
          <div 
            style="width:100%;"
            class="stick bg-white px-9 pt-4 pb-8 border-rounded "
          >
            <div class="d-flex justify-space-between">
              <h4>Color range</h4>
              <v-btn small outlined color="primary" @click="applyFilter"> Apply </v-btn>
            </div>
            <color-selector class="pb-2" @change-color='(color) => filter.color = color' />
            <hr />
            <div class="mt-8 mb-8">
              <div class="d-flex justify-space-between mb-4">
                <h4>Body Type</h4>
                <v-btn small outlined color="primary" @click="applyFilter"> Apply </v-btn>
              </div>
              <select-input v-model='filter.bodyType' :items="bodyTypes" class="pa-0" label="Select Body Type" />
            </div>
            <div class="mb-8">
              <div class="d-flex justify-space-between mb-4">
                <h4>Model</h4>
                <v-btn small outlined color="primary" @click="applyFilter"> Apply </v-btn>
              </div>
              <select-input :value='filter.model' :items="models" class="pa-0" label="Select a Model" />
            </div>
            <div >
              <div class="d-flex justify-space-between mb-4">
                <h4>Vehicle Year</h4>
                <v-btn small outlined color="primary" @click="applyFilter"> Apply </v-btn>
              </div>
              <select-input v-model='filter.age' :items="years" class="pa-0" label="Select Vehicle Year" />
            </div>
          </div>
        </vue-sticky-sidebar>

      </div>


      <div>
        <div class="d-flex justify-center">
          <v-btn @click="applyFilter" color="primary" class="position-sticky top-0 mb-4 " v-show="loading"  minWidth="380px" minHeight="40px" elevation="0" >
            <h6 class="mr-3">Load New Vehicle's</h6>
            <i class="fas fa-undo"></i>
          </v-btn>
        </div>
        <div 
            v-for="(item, $index) in vehicles"
            :key="$index">
          <router-link
            class="text-decoration-none"
            id="infinite-list"
            :to="`/vehicle/${item._id}`"
          >
            <image-slider
              :images="imageinfo.image"
              :details="item"
              style="width: 500px"
              class="mb-7"
            />
          </router-link>
        </div>
        <infinite-loading @infinite="infiniteHandler">
          <div slot="no-more"></div>
        </infinite-loading>
      </div>


      <div
        style="width: 100%; height: 100%"
        class="px-5 pt-5 pb-5 ml-3 position-sticky top-0"
      >
      
        <vue-sticky-sidebar class="sidebar" containerSelector=".stick-me" innerWrapperSelector='stick' :topSpacing='90'>
          <div 
            style="width:100%;"
            class="stick bg-white px-9 pt-4 pb-10 border-rounded "
          >
            <div class="mb-8">
              <div class="d-flex justify-space-between mb-5">
                <h4>Hire Cost</h4>
                <v-btn small outlined color="primary" @click="applyFilter"> Apply </v-btn>
              </div>
              <range-slider v-model='filter.cost' :min="1000" :max="10000" :slider="1000" />
            </div>

            <div>
              <div class="d-flex justify-space-between mb-5">
                <h4>Mileage</h4>
                <v-btn small outlined color="primary" @click="applyFilter"> Apply </v-btn>
              </div>
              <range-slider :min="500" :max="100000" v-model="filter.mileage" />
            </div>

            <hr />

            <div class="mt-8 mb-8">
              <div class="d-flex justify-space-between mb-7">
                <h4>Transmission</h4>
                <v-btn small outlined color="primary" @click="applyFilter"> Apply </v-btn>
              </div>
              <select-input
                :items="transmissions"
                class="pa-0"
                label="Select Transmission"
                v-model='filter.transmission'
              />
            </div>

            <div class="d-flex justify-space-between bg-price bg-light-white text-center border-rounded px-2">
              <h4 style="line-height: 4rem">Taxis Licence</h4>
              <v-switch  v-model="filter.badge" inset></v-switch>
            </div>
          </div>

        </vue-sticky-sidebar>
      </div>
    </div>
  </main>
</template>

<script>
import ColorSelector from "../components/ColorSelector";
import SelectInput from "../components/forms/SelectInput";
import ImageSlider from "../components/ImageSlider";
import RangeSlider from "../components/RangeSlider.vue";
import InfiniteLoading from "vue-infinite-loading";
import { mapGetters } from 'vuex';
import { EventBus } from '../utils/event-bus'
import vueStickySidebar from "vue-sticky-sidebar";

export default {
  name: "Home",
  components: {
    ColorSelector,
    ImageSlider,
    RangeSlider,
    SelectInput,
    InfiniteLoading,
    "vue-sticky-sidebar": vueStickySidebar
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data: () => ({
    infiniteState: null,
    search: '',
    filter: {
      color: '',
      bodyType: '',
      model: '',
      mileage: 1000,
      fuelType: '',
      age: '',
      cost: '',
      transmission: '',
      badge: true,
    },
    page: 1,
    loading: true,
    list: [],
    switch1: true,
    imageinfo: {
      image: [
        require("../assets/images/car.jpg"),
        require("../assets/images/bmw.png"),
        require("../assets/images/blue.png"),
      ],
      detail: {
        name: "BMW X5",
        model: "2018 Series",
        price: "$400",
        duration: "weekly",
      },
    },
    models: [ "Hatchback", "Salon", "Estate", "MPV", "SUV", "All" ],
    bodyTypes: [ "Hatchback", "Salon", "Estate", "MPV", "SUV", "All" ],
   
    transmissions: [ "Automatic", "Manual"],
  }),
  computed: {
    ...mapGetters({
      vehicles: 'vehicles',
    }),
    years: function(){
      let years = []
      for(let i = 1991; i <= new Date().getUTCFullYear(); i++){
          years.push(i);
      }
      return years
    }
  },
  created() {
    EventBus.$on('searchVehicles', (query) => {
      this.search = query;
      this.applyFilter();
    })
    this.$store.dispatch('fetchVehicles', this.page)
  },
  beforeDestroy() {
    EventBus.$off('searchVehicles');
  },
  methods: {
    infiniteHandler($state) {
        this.loading = true;
        this.infiniteState = $state;

        const data = { keyword: this.search, ...this.filter, page: this.page }
        const request = this.$store.dispatch('searchVehicle', data)
        request.then( ({data}) => {
          if (data.length) {
            this.page += 1;
            $state.loaded();
          } else {
            $state.complete();
            this.loading = false;
          }
        });
    },
    applyFilter() {
      this.infiniteHandler(this.infiniteState);
    }
  },
};
</script>

<style scoped>
.border-rounded{
  border-radius: 10px;
}
</style>

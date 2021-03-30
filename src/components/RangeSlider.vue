<template>
  <main>
    <v-card flat color="transparent">
      <v-card-text>
        <v-row>
          <v-col class="pr-4">
            <v-slider
              v-bind='$attrs'
              v-on='$listeners'
              class="align-center"
              :max="max"
              :min="min"
              hide-details
              @change="updateSlider"
            >
            </v-slider>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <div class="d-flex justify-space-between px-2">
      <div class="bg-price bg-light-white text-center">
        <small class="px-2 " style="line-height:1rem">{{ min }}</small>
      </div>
      <div class="bg-price bg-light-white text-center">
        <small class="px-2" style="line-height:1rem">{{ slider }}</small>
        <v-text-field
          v-bind="$attrs"
          class="d-none"
          type="number"
        ></v-text-field>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    min: { required: true, type: Number },
    max: { required: true, type: Number },
    // slider: { required: true, type: Number },
  },
  data() {
    return {
      slider: 1000
    };
  },
  methods: {
    updateSlider(value) {
      this.slider = value;
    }
  },
};
</script>

<style scoped>
.bg-price {
  border: 1px solid #ebebeb;
  border-radius: 14px;
  opacity: 1;
}
</style>

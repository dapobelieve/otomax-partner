<template>
  <main>
    <div class="bg-white rounded py-6 px-5 d-flex">
      <div class="pickup">
        <div class="bg-light-blue d-flex rounded mb-6 justify-space-between">
          <img
            src="../assets/images/bmw.png"
            width="100"
            height="100"
            class="rounded"
          />
          <div class="px-6 pt-5">
            <h6 class="text-blue">Active Hire</h6>
            <h3 class="font-weight-bold">BMW X5</h3>
            <h6 class="mb-0">2018 Series</h6>
          </div>
        </div>

        <div class="bg-light-white d-flex rounded mb-12 justify-space-between px-5 py-4">
          <h6 class="pt-2">Pick-Up Date</h6>
          <div>
            <span>17th May 2021</span>
            <h6 class="text-blue">Work Hours Only</h6>
          </div>
        </div>

        <div class="mb-9">
          <div class="d-flex mb-1">
            <v-badge bordered color="bg-blue" dot class="mr-3 mt-2"> </v-badge>
            <h6>Pick-Up Location</h6>
          </div>

          <div class="bg-light-white rounded px-5 py-2 text-center">
            <p class="mb-0">40 Blue Lane London NW04 8UA</p>
          </div>
        </div>

        <div class="mb-12">
          <div class="d-flex mb-1">
            <v-badge bordered color="bg-green" dot class="mr-3 mt-2"> </v-badge>
            <h6>Your Location</h6>
          </div>

          <div class="bg-light-white rounded px-5 py-2 text-center">
            <p class="mb-0">40 Green Lane London NW04 8UA</p>
          </div>
        </div>

        <div class="bg-light-blue d-flex rounded px-5">
          <div class="pt-4 mr-3">
            <img
              src="../assets/images/group.svg"
              width="70"
              height="70"
              class="rounded-circle"
            />
          </div>
          <h6 class="py-9">Provide your name and Hire ID on Arrival</h6>
        </div>
      </div>
      <div class="bg-black rounded ml-6 map" style="flex: 1">
        
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.pickup {
  max-width: 250px;
  .rounded {
    border-radius: 0.8em !important;
  }
}

</style>

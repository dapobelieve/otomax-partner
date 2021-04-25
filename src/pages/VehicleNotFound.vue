<template>
  <v-container class="d-flex justify-center mt-15">
    <div class="hold bg-white rounded mt-12 px-12 py-12 flex-column d-flex align-center">
        <div class="size align-center text-center">
        <v-img
          class="mb-9 text-center"
          style='margin: auto'
          src="../assets/images/vehicle-not-found.png"
          width="100"
          height="100"></v-img>

        <h2 class="mb-2">Vehicle details could not be found</h2>
        <p class='text-center mt-6'>
          If you are sure that you entered the correct registration number (UY75-09DVC) and details could not be fetched proceed to manual upload
        </p>
        <v-btn  block color="primary" elevation="0" class='mt-15' href='/vehicle/upload'><h6>Manual Upload</h6></v-btn>
      </div>

      <v-btn class='top-btn' color='white'><h6>Skip</h6></v-btn>
    </div>
    
  </v-container>
</template>

<script>

export default {
  name: 'VehicleNotFound',
  data: () => ({

  }),
}
</script>

<style lang='scss' scoped>
@import '../assets/css/_variables.scss';

.hold {
  width: 50%;
  position: relative;
  .size {
    width: 50%;
  }
  .top-btn {
    position: absolute;
    top: -75px;
    right: -180px;
    color: $blue;
  }
}
</style>

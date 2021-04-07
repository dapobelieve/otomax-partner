<template>
  <v-container class="d-flex justify-center mt-15">
    <div class="hold bg-white rounded mt-12 px-12 py-12 flex-column d-flex align-center">
        <div class="size align-center text-center">
        <v-img
          class="mb-9 text-center"
          style='margin: auto'
          src="../assets/images/Group8402.png"
          width="100"
          height="100"></v-img>

        <h2 class="mb-2">Minimum Hire Price weekly</h2>
        <p class='text-center'>
          How much do you mjam augue lacus, efficitur quis iaculis in, elementum at eros. Suspendisse
        </p>

        <form-input class='mt-8' style="width:100%" rounded placeholder='$ 200' />
        <v-btn  block color="primary" elevation="0" ><h6>Save</h6></v-btn>
      </div>

      <v-btn class='top-btn' color='white'><h6>Skip</h6></v-btn>
    </div>
    
  </v-container>
</template>

<script>
import FormInput from '@/components/forms/FormInput'

export default {
  name: 'VehicleUpload',
  data: () => ({

  }),
  components: {
    FormInput,
  },
}
</script>

<style lang='scss' scoped>
@import '../assets/css/_variables.scss';

.hold {
  width: 600px;
  position: relative;
  .size {
    width: 300px;
  }
  .top-btn {
    position: absolute;
    top: -75px;
    right: -180px;
    color: $blue;
  }
}
</style>

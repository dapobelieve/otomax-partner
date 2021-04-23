<template>
  <v-container class="d-flex justify-center mt-15">
    <div class="hold bg-white rounded mt-12 px-12 py-12 flex-column d-flex align-center">
        <div class="size align-center text-center">
        <v-img
          class="mb-9 text-center"
          style='margin: auto'
          src="../assets/images/Group8404.png"
          width="100"
          height="100"></v-img>

        <h2 class="mb-2">In Review by Otomax</h2>
        <p class='text-center mb-12'>
          Price will be reviewed by otomax and a suggested price will be provide based on market trend
        </p>
        <v-btn  block color="primary" elevation="0" href='/vehicle'><h6>Proceed to vehicle profile</h6></v-btn>
      </div>

      <v-btn class='top-btn' color='white'><h6>Skip</h6></v-btn>
    </div>
    
  </v-container>
</template>

<script>
import FormInput from '@/components/forms/FormInput'

export default {
  name: 'HirePricePage',
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

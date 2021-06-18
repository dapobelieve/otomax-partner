<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div class="ms-3 mt-5 mb-6">
          <a v-bind="attrs" v-on="on"><img :src="require('@/assets/images/Group8338.png')" alt="" width='30' style="cursor: pointer" /></a>
        </div>
      </template>
      <Ocard class="pt-10">
        <div class="d-flex flex-column align-center justify-center mb-8">
          <img width="100" height="100" class="mb-10" :src="require('@/assets/images/Group8402.png')" alt="">
          <h2 class="mb-5 text-center">Minimum Hire Price weekly</h2>
          <div class="text-center mb-8">
            What is the minimum price you want <br> your vehicle to go on hire for?
          </div>
          <div class="w-50">
            <FormInput  v-model="form.price" position="center" class="mb-3" placeholder="e.g £100" />
            <v-btn :loading="loading" class="text-capitalize" @click="submitPrice" block color="primary" elevation="0">Save</v-btn>
          </div>
        </div>
      </Ocard>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      loading: false,
      form: {}
    }
  },
  components: {
    Ocard: () => import("@/components/OtomaxCard"),
    FormInput: () => import("@/components/forms/FormInput")
  },
  computed() {
    // priceErr() {

    // }
  },
  methods: {
    async submitPrice() {}
  }
}
</script>
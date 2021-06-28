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
          <h2 class="mb-5 text-center">Minimum Hire Price (weekly)</h2>
          <div class="text-center mb-8">
            Update the minimum price you want <br> your vehicle to go on hire for.
          </div>
          <div class="w-50">
            <FormInput :error="$v.form.price.$error" :message="priceErr" v-model="$v.form.price.$model" position="center" class="mb-3" placeholder="e.g £100" />
            <v-btn :loading="loading" class="text-capitalize py-5" @click="submitPrice" block color="primary" elevation="0">Save</v-btn>
          </div>
        </div>
      </Ocard>
    </v-dialog>
  </v-row>
</template>
<script>
import { required } from "vuelidate/lib/validators";  
export default {
  inject: ['reactive'],
  data () {
    return {
      dialog: false,
      loading: false,
      form: {
        price: null
      }
    }
  },
  computed: {
    priceErr() {
      if (!this.$v.form.price.required) return "Enter a price";
    },
    vehicle() {
      return this.reactive.vehicle
    }
  },
  validations: {
    form: {
      price: { required }
    }
  },
  components: {
    Ocard: () => import("@/components/OtomaxCard"),
    FormInput: () => import("@/components/forms/FormInput")
  },
  methods: {
    async submitPrice() {
      this.loading = true;
      this.$v.$touch();
      try {
        if (!this.$v.$invalid) {
          let res = await this.$store.dispatch('vehicle/updateHirePrice', {
            vehicleId: this.vehicle._id,
            oldPrice: parseFloat(this.vehicle.pricing.amount),
            newPrice: parseFloat(this.form.price)
          })
          this.$toast.success('Hire price updated')
          this.form.price = null
          this.$emit('price-updated')
          this.dialog = false
        }
      }catch(err) {
        console.log({err})
        const { error } = err
        if(error)
          this.$toast.error(error.response.data.message)
        else
           this.$toast.error(err.message)
      }
      finally {
        this.loading = false
      }
    }
  }
}
</script>
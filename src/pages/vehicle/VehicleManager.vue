<template>
  <v-container fluid class="px-6">
    <v-row justify="center">
      <v-col cols="12" lg="10" xl="6">
        <v-responsive>
          <Ocard class="pa-7">
            <v-row align="center" class="mb-10 d-flex flex-column flex-md-row">
              <div class="me-md-5 pa-8 bg-gray rounded-border">
                <img height="50px" :src="require('@/assets/images/nav/vehicle-active.svg')" alt="">
              </div>
              <h1 class="font-weight-bold">Vehicle Manager</h1>
              <div class="ms-md-auto mt-9 mt-md-0">
                <v-btn @click.prevent="$router.push({name: 'vehicle-create'})" color="primary" class="px-15 py-5 text-capitalize" primary elevation="0">Add New Vehicle</v-btn>
              </div>
            </v-row>
            <v-row>
              <v-col class="d-md-flex flex-md-wrap justify-md-space-between" cols=12>
                <VehicleManagerCard v-for="(cat, catIndex) in categories" :category="cat" :key="catIndex" :number="catIndex" />
              </v-col>
            </v-row>
          </Ocard>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import vehicleCategories from "@/utils/vehicleStates"	
export default {
  data () {
    return {
      categories: {
        "availableForVehicle": {...vehicleCategories['available']  },
        "incompleteVehicleProfile":{...vehicleCategories['incomplete']},
        "activeHire":{...vehicleCategories['active-hire']},
        "inReview":{...vehicleCategories['in-review']},
        "notAvailableForHire":{...vehicleCategories['not-available']},
        "returnedVehicles":{...vehicleCategories['returned']}
      }
    }
  },
  components: {
    Ocard: () => import("@/components/OtomaxCard"),
    VehicleManagerCard: () => import("@/components/VehicleManagerCard")
  },
  methods: {
    async getSummary () {
      try {
        let res = await this.$store.dispatch('vehicle/vehicleSummary');
        const { vehiclesSummary } = res.data;

        Object.keys(vehiclesSummary).forEach(summary => {
          this.categories[summary].count = vehiclesSummary[summary]
        })

      }catch(e) {
        this.$toast.error(e.message)
      }
    }
  },
  async mounted() {
    await this.getSummary()
  }
} 
</script>
<style lang="scss">
.v-input {
  input {
    font-weight: bold
  }
}

.vm-card {
  flex: 0 1 31%
}
</style>
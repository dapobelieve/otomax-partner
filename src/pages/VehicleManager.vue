<template>
  <v-container fluid class="px-md-12 px-6">
    <v-row justify="center">
      <v-col cols="12" md="10" lg=10>
        <Ocard class="pa-10">
          <v-row align="center" class="mb-5 d-flex flex-column flex-md-row">
            <div class="me-md-5 pa-8 bg-gray rounded-border">
              <img height="50px" :src="require('@/assets/images/nav/vehicle-active.svg')" alt="">
            </div>
            <h1 class="font-weight-bold">Vehicle Manager</h1>
            <div class="ms-md-auto mt-9 mt-md-0">
              <v-btn color="primary" class=" px-15 py-5 text-capitalize" ripple primary elevation="0">Add New Vehicle</v-btn>
            </div>
          </v-row>
          <v-row>
            <v-col class="d-md-flex flex-md-wrap justify-md-space-between" cols=12>
              <VehicleManagerCard v-for="(cat, catIndex) in categories" :category="cat" :key="catIndex" :number="catIndex" />
            </v-col>
          </v-row>
        </Ocard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      categories: [
        {
          name: "Available for Hire",
          desc: "Vehicle(s) awaiting hire.",
          icon: require('@/assets/images/vehicle-status/available.svg')
        },
        {
          name: "Incomplete Vehicle profile",
          desc: "Please complete the vehicle listing",
          icon: require('@/assets/images/vehicle-status/incomplete.svg')
        },
        {
          name: "Active Hire",
          desc: "Vehicle(s) currently on hire.",
          icon: require('@/assets/images/vehicle-status/active.svg')
        },
        {
          name: "In Review by Otomax Admin",
          desc: "Vehicle(s) pending review by Otomax.",
          icon: require('@/assets/images/vehicle-status/review.svg')
        },
        {
          name: "Not Available for Hire",
          desc: "Vehicle(s) currently not up for hire.",
          icon: require('@/assets/images/vehicle-status/not-available.svg')
        },
        {
          name: "Returned Vehicles",
          desc: "Vehicle(s) to be picked up in 24 hours from Otomax.",
          icon: require('@/assets/images/vehicle-status/returned.svg')
        }
      ]
    }
  },
  components: {
    Ocard: () => import("@/components/OtomaxCard"),
    VehicleManagerCard: () => import("@/components/VehicleManagerCard")
  },
  methods: {},
  mounted() {

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
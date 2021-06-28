<template>
  <v-container fluid class="mt-4">
    <v-row justify="center" class="px-4 px-lg-0">
      <v-col cols=12 lg=10 xl="6">
        <v-row>
          <div class="d-flex justify-left align-center ml-0">
              <div class="d-header d-flex align-center">
                <h2 v-if="user" class="ml-4">Welcome {{user.firstName}}!</h2>
              </div>
          </div>
        </v-row>
        <v-row justify="center">
          <v-col cols=12 md=9>
            <v-row>
              <v-col class="d-flex" cols="12" md=7>
                <DashboardActiveHireCard :vehicle="activeVehicle" />
              </v-col>
              <v-col class="d-flex" cols="12" md=5>
                <DashboardReturnedCard :vehicle="returnedVehicle" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <DashboardPaymentsCard />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols=12 md=3>
            <v-row>
              <v-col cols=12>
                <Ocard class="pa-4 d-flex flex-column flex" color="#fff">
                  <div class="d-flex flex align-center mb-14">
                    <img class="me-4" height="40px" :src="require('@/assets/images/plus.svg')" alt="">
                    <h3 class="black--text font-weight-medium">Total Vehicles</h3>
                  </div>
                  <div class="d-flex flex justify-space-between black--text">
                    <div>
                      <h3 class="display-2 font-weight-bold">{{allVehicles.length}}</h3>
                    </div>
                    <div class="d-flex">
                      <v-btn @click="$router.push({name: 'vehicle-create'})" style="letter-spacing: 0.2px;" :ripple="false" depressed class="ms-auto px-4 py-4 text-capitalize" small primary color="primary">
                        Add New Vehicle
                      </v-btn>
                    </div>
                  </div>
                </Ocard>
              </v-col>
              <v-col cols=12>
                <DashboardIncompleteCard :vehicle="draft" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'FleetPartnerHome',  
  data() {
    return {
      hideFund: false,
      activeVehicle: null,
      returnedVehicle: null,
      allVehicles: [],
      draft:  null
    };
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  components: {
    DashboardActiveHireCard: () => import("@/components/DashboardActiveHireCard"),
    DashboardReturnedCard: () => import("@/components/DashboardReturnedCard"),
    DashboardIncompleteCard: () => import("@/components/DashboardIncompleteCard"),
    DashboardPaymentsCard: () => import("@/components/DashboardPaymentsCard"),
    Ocard: () => import("@/components/OtomaxCard"),
  },
  async mounted()  {
    let active = await this.$store.dispatch('vehicle/getVehiclesByStatus', { status: 'HIRED'});
    this.activeVehicle = active.data[0]

    let all = await this.$store.dispatch('vehicle/getAllVehicles');
    this.allVehicles = all.data

    let draft = await this.$store.dispatch('vehicle/getVehiclesByStatus', { status: 'DRAFT'});
    this.draft = draft.data[2]

    let returned = await this.$store.dispatch('vehicle/getVehiclesByStatus', { status: 'RETURNED'});
    this.returnedVehicle = returned.data[0]
  },
};
</script>

<style lang='scss' scoped>
  .extra { border-radius: 8px !important; }
</style>

<template>
  <v-container fluid class="mt-4">
    <v-row justify="center">
      <v-col cols=12 lg=10>
        <v-row>
          <div class="d-flex justify-left align-center ml-0">
              <div class="d-header d-flex align-center">
                <h2 class="ml-4">Welcome {{user.firstName}}!</h2>
              </div>
          </div>
        </v-row>
        <v-row justify="center">
          <v-col cols=12 md=8>
            <v-row justify="center">
              <v-col cols="12" md=8>
                <Ocard color="#000">
                  <div class="d-flex flex align-center">
                    <img class="me-4" :src="require('@/assets/images/vehicle-status/active.svg')" alt="">
                    <h3 class="white--text">Active Hire</h3>
                  </div>
                </Ocard>
              </v-col>
              <v-col cols="12" md=4>
                <Ocard color="cyan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero, maiores eum tenetur tempore aspernatur temporibus illum, odio debitis quia.</Ocard>
              </v-col>
            </v-row>
            
          </v-col>
          <v-col cols=12 md=4>
            <Ocard color="yellow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero, maiores eum tenetur tempore aspernatur temporibus illum, odio debitis quia.</Ocard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import DashboardFleetInfo from '../components/vehicle/DashboardFleetInfo';
import DashboardFleetItem from '../components/vehicle/DashboardFleetItem'
import DashboardSummary from '../components/vehicle/DashboardSummary';
import TransactionItem from '../components/vehicle/TransactionItem';

export default {
  name: 'FleetPartnerHome',  
  data() {
    return {
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
    Ocard: () => import("@/components/OtomaxCard"),
    DashboardFleetItem,
    DashboardSummary,
    DashboardFleetInfo,
    TransactionItem,
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


    console.log(active)
  },
};
</script>

<style lang='scss' scoped>
  .extra { border-radius: 8px !important; }
</style>

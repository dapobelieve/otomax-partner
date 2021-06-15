<template>
  <v-container class="mt-4">
      <v-row>
        <div class="d-flex justify-left align-center ml-0">
            <div class="d-header d-flex align-center">
              <h2 class="ml-4">Welcome {{user.firstName}}!</h2>
            </div>
        </div>
      </v-row>
      <div class="d-flex mt-8 justify-center">
          <div class="side">
              <div class="content d-flex">
                <div class='d-flex' style='flex-grow: 2;'>
                  <dashboard-summary 
                    v-if="activeVehicle"
                    body-text='Upcoming Fund'
                    :amount="activeVehicle.pricing.amount"
                    :date='activeVehicle.updatedAt | ODateFormat'
                    linkText='Hire Profile'
                    :brand='activeVehicle.make'
                    @hire-profile="$router.push({ name: 'vehicle-active-hire', params: {id: activeVehicle._id}})"
                    :model='activeVehicle.model'
                  />
                </div>

                <div class="return-vehicle" style='flex-grow: 0'>
                  <dashboard-fleet-info 
                    v-if="returnedVehicle && returnedVehicle.length"
                    headerText='Returned Vehicles'
                    :icon='require("@/assets/images/ReturnedVehicles.png")'
                    bodyText='Pick Up Date'
                    bodyDetails='17th May 2021'
                    :model='returnedVehicle.make'
                    brand='BMW X5'
                    linkText='Pick Up'
                    class='ml-6'
                  />
                  <dashboard-fleet-info 
                    v-else
                    headerText='Returned Vehicles'
                    :icon='require("@/assets/images/ReturnedVehicles.png")'
                    bodyDetails='No Returned vehicles'
                    class='ml-6'
                  />
                </div>
              </div>
              <div class="extra mt-8 bg-white pa-6 px-8">
                  <!-- Transaction details here -->
                  <div>
                    <h4>Received Recently</h4>
                  </div>
                  <div class="transactions mt-4">
                    <transaction-item 
                      brand='Toyota Corolla'
                      model='2016'
                      price='400'
                      date='11/08/2021'
                    />
                    <transaction-item 
                      brand='Toyota Corolla'
                      model='2016'
                      price='400'
                      date='11/08/2021'
                      background='#fff'
                    />
                    <transaction-item 
                      brand='Toyota Corolla'
                      model='2016'
                      price='400'
                      date='11/08/2021'
                    />
                  </div>
              </div>
          </div>
          <div class="side pl-6">
              <!-- Other details here -->
              <dashboard-fleet-item 
                  title='Total  Vehicles'
                  :count='allVehicles.length'
                  btnText='Add New Vehicle'
                  href='/vehicle/upload/info'
              />

              <dashboard-fleet-info 
                v-if="draft"
                headerText='Incomplete vehicle profile'
                :icon='require("@/assets/images/Incomplete.png")'
                bodyText='Pick Up Date'
                :bodyDetails='draft.updatedAt | ODateFormat'
                :model='draft.model'
                :brand='draft.make'
                class='mt-6'
              />
          </div>
      </div>
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

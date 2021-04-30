<template>
  <v-container class=" mt-9" style="border-radius: 8px; width: 75%;">
    <main class="py-15 px-15">


      <v-row>
        <div class="d-flex justify-left align-center ml-0" style='width: 100%'>
            <div class="d-header d-flex align-center ml-2">
              <!-- <img src="../assets/images/Group8355.png" width='90' class='mr-4'> -->
              <h3>Welcome James!</h3>
            </div>
        </div>
      </v-row>
      
      <div class="d-flex mt-8 justify-center">
        
          <div class="side">
              <div class="content d-flex">
                <div class='d-flex' style='flex-grow: 2;'>
                  <dashboard-summary 
                    body-text='Upcoming Fund'
                    amount='400'
                    date='March 20th'
                    linkText='Hire Profile'
                    brand='BMW X5'
                    model='2018 Series'
                  />
                </div>

                <div class="return-vehicle" style='flex-grow: 0'>
                  <dashboard-fleet-info 
                    headerText='Returned Vehicles'
                    :icon='require("@/assets/images/ReturnedVehicles.png")'
                    bodyText='Pick Up Date'
                    bodyDetails='17th May 2021'
                    model='2018 Series'
                    brand='BMW X5'
                    linkText='Pick Up'
                    class='mx-6'
                  />
                </div>
              </div>
              <div class="extra mt-10 bg-white pa-6 px-8">
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
          <div class="side px-6 mt-4" style='box-sizing: content-box;'>
              <!-- Other details here -->
              <dashboard-fleet-item 
                  title='Total  Vehicles'
                  count='17'
                  btnText='Add New Vehicle'
                  href='/vehicle/upload/info'
              />

              <dashboard-fleet-info 
                headerText='Incomplete vehicle profile'
                :icon='require("@/assets/images/Incomplete.png")'
                bodyText='Pick Up Date'
                bodyDetails='DU4-09AKG'
                model='2018 Series'
                brand='BMW X5'
                linkText='Complete Profile'
                class='my-10'
              />
          </div>
      </div>

    </main>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import DashboardFleetInfo from '../components/vehicle/DashboardFleetInfo';
import DashboardFleetItem from '../components/vehicle/DashboardFleetItem'
import DashboardSummary from '../components/vehicle/DashboardSummary';
import TransactionItem from '../components/vehicle/TransactionItem';

export default {
  name: 'FleetPartner',  
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  components: {
    DashboardFleetItem,
    DashboardSummary,
    DashboardFleetInfo,
    TransactionItem,
  },
  mounted()  {
    console.log(this.user)
  },
};
</script>

<style lang='scss' scoped>
  .extra { border-radius: 8px !important; }
</style>

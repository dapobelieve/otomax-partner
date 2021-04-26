<template>
  <v-container class="bg-white mt-9" style="border-radius: 8px; width: 70%;">
    <main class="py-15 px-15">
      <v-row>
        <div class="d-flex justify-left align-center" style='width: 100%'>
            <div class="d-header d-flex align-center">
              <img src="../assets/images/Group8355.png" width='90' class='mr-4'>
              <h2>Welcome James!</h2>
            </div>

            <div style='margin-left: auto'>
              <v-btn color="primary">Add new Vehicle</v-btn>
            </div>
        </div>
      </v-row>
      
      <div class="d-flex mt-8">
          <div class="side">
              <div class="content d-flex">
                  <dashboard-summary 
                    class=''
                    body-text='Upcoming Fund'
                    amount='400'
                    date='March 20th'
                    linkText='Hire Profile'
                    brand='BMW X5'
                    model='2018 Series'
                  />

                  <div class="return-vehicle">
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
              <div class="extra mt-15">
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
          <div class="side px-6">
              <!-- Other details here -->
              <dashboard-fleet-item 
                  title='Total  Vehicles'
                  count='17'
                  btnText='Add New Vehicle'
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

</style>

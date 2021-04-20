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
      
      <div class="d-flex">
          <div class="side">
              <div class="content">
                  <dashboard-summary 
                    class='mt-8'
                    body-text='Upcoming Fund'
                    amount='400'
                    date='March 20th'
                    linkText='Hire Profile'
                    brand='BMW X5'
                    model='2018 Series'
                  />

          <dashboard-item 
            class='board-item'
            title='Active Hire'
            description='Vehicle(s) currently on hire.'
            href='#'
            :count='3'
            :icon="require('@/assets/images/ActiveHire.png')"
          />
                  <div class="return-vehicle">
                    <div class="d-flex">
                      <v-img :src='require("@/assets/images/ReturnedVehicles.png")' width='35'
                       />
                      <h3>Returned Vehicles</h3>
                    </div>
                    <div class="v-model-info">
                      <h2>BMW X5</h2>
                      <span>2018 Series</span>
                    </div>
                    <div class="v-car-info d-flex">
                      <div>
                        <span>Vehicle</span>
                        <span>Pick Up Date</span>
                      </div>
                      <div>
                        <v-btn class='vm-btn'>Request Date</v-btn>
                      </div>
                    </div>
                    <div>
                      <v-btn color='primary'>Pick Up</v-btn>
                    </div>
                  </div>
              </div>
              <div class="extra">
                  <!-- Transaction details here -->
              </div>
          </div>
          <div class="side">
              <!-- Other details here -->
          </div>
      </div>

    </main>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import DashboardItem from '../components/vehicle/DashboardItem'
import DashboardSummary from '../components/vehicle/DashboardSummary';

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
    DashboardItem,
    DashboardSummary,
  },
  mounted()  {
    console.log(this.user)
  },
};
</script>

<style lang='scss' scoped>

</style>

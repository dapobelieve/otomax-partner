<template>
  <v-container class="bg-white mt-9" style="border-radius: 8px; width: 70%;">
    <main class="py-15 px-15">
      <v-row>
        <div class="d-flex justify-left align-center" style='width: 100%'>
            <div class="d-header d-flex align-center">
              <img src="../assets/images/Group8355.png" width='90' class='mr-4'>
              <h2>Vehicle's Manager</h2>
            </div>

            <div style='margin-left: auto'>
              <v-btn color="primary">Add new Vehicle</v-btn>
            </div>
        </div>
      </v-row>
      <div class='board-content'>
          <dashboard-item 
            class='board-item'
            title='Incomplete Profile'
            description='Please complete the vehicle listing'
            href='/vehicle/listing'
            :count='2'
            :icon="require('@/assets/images/Incomplete.png')"
          />

          <dashboard-item 
            class='board-item'
            title='Active Hire'
            description='Vehicle(s) currently on hire.'
            href='/vehicle/listing'
            :count='3'
            :icon="require('@/assets/images/ActiveHire.png')"
          />
          <dashboard-item 
            class='board-item'
            title='Available for Hire'
            description='Vehicle(s) awaiting hire.'
            href='/vehicle/listing'
            :count='2'
            :icon="require('@/assets/images/AvailableforHire.png')"
          />


          <dashboard-item 
            class='board-item'
            title='In Review by Otomax Admin'
            description='Vehicle(s) pending review by Otomax..'
            href='/vehicle/listing'
            :count='1'
          />
          <dashboard-item 
            class='board-item'
            title='Not Available for Hire'
            description='Vehicle(s) currently not up for hire.'
            href='/vehicle/listing'
            :count='8'
            :icon="require('@/assets/images/NotAvailableforHire.png')"
          />
          <dashboard-item 
            class='board-item'
            title='Returned Vehicles'
            description='Vehicle(s) to be picked up in 24 hours from Otomax.'
            href='/vehicle/listing'
            :count='1'
            :icon="require('@/assets/images/ReturnedVehicles.png')"
          />
      </div>

    </main>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import DashboardItem from '../components/vehicle/DashboardItem'

export default {
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
  },
  mounted()  {
    console.log(this.user)
  },
};
</script>

<style lang='scss' scoped>
.center {
  padding-right: 198px !important;
  padding-left: 207px !important;
}
.board-content {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  align-items: center;
  grid-gap: 15px;
  @media screen and (max-width: 1618px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>

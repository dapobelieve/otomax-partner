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
                  <!-- Active hire card here -->
              </div>
              <div class="extra">
                  <!-- Transaction details here -->
              </div>
          </div>
          <div class="side">
              
          </div>
      </div>

    </main>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import DashboardItem from '../components/vehicle/DashboardItem'

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
  },
  mounted()  {
    console.log(this.user)
  },
};
</script>

<style lang='scss' scoped>

</style>

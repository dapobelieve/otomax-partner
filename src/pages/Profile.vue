<template>
  <v-container class="bg-white mt-9" style="width: 1024px">
    <main class="center py-15">
      <div class="d-flex justify-space-between mb-10">
        <div class="d-flex">
          <v-img
            :src="user.imageUrl || require('../assets/images/Group8362.png')"
            class="rounded-circle mr-6 d-flex"
            width="140"
            height="140"
          ></v-img>
          <div class="mr-13">
            <div class='mt-7 fav-star'>
              <img src="../assets/images/favourites.png" alt="">
              <span>Fleet Partner</span>
            </div>
            <h2 class="my-1 mt-0">{{ `${user.firstName} ${user.lastName}` }}</h2>
            <p class="small-font">{{ user.age }}</p>
          </div>
        </div>
        <div>
          <v-btn small outlined color="primary" class="rounded-border mb-7"
            >Edit Profile</v-btn
          >
          <div class="d-flex bg-light-white rounded-border pa-2">
            <p class="mt-1 mr-3 small-font mb-0">Partner ID</p>
            <h4 class="font-weight-bold">{{ user.userName }}</h4>
          </div>
        </div>
      </div>

      <div class="mb-9">
        <h3 class="text-grey-5 text-muted mb-4">Business Details</h3>
        <div class="d-flex justify-space-between">
          <div>
            <h4 class="mb-2">Business Name</h4>
            <p class="small-font">{{ user.phoneNumber }}</p>
          </div>
          <div>
            <h4 class="mb-2">VAT number</h4>
            <p class="small-font">{{ user.dateOfBirth }}</p>
          </div>
          <div>
            <h4 class="mb-2">Address</h4>
            <p class="small-font">{{ user.location }}40 Green Lane London NW04 8UB</p>
          </div>
        </div>

        <div class="d-flex align-left mt-6">
          <div>
            <h4 class="mb-2">Phone No.</h4>
            <p class="small-font">(+447) 845-6289-456</p>
          </div>
          <div class='ml-12'>
            <h4 class="mb-2">Postcode</h4>
            <p class="small-font">22-04-1987</p>
          </div>
        </div>
      </div>

    </main>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      user: {
        name: "Joe Ali",
        age: "Age 34",
        phoneNumber: "(+447) 845-6289-456",
        dob: "22-04-1987",
        address: "40 Green Lane London NW04 8UB",
      },
    };
  },
  computed: {
    // ...mapGetters({
    //   user: 'user',
    // }),
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
.fav-star {
  vertical-align: middle;
  // display: flex;
  img {
    background: #D5F0FE;
    padding: 5px;
    border-radius: 20px;
    display: inline-block;
    position: relative;
    z-index: 2;
  }
  span {
    background: #D5F0FE;
    padding: 2px 15px;
    border-radius: 30px;
    margin-left: -7px;
    font-size: 0.6rem;
    margin-top: 10px;
    display: inline-block;
    vertical-align: top;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
}
</style>

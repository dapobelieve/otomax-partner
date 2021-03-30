<template>
  <v-container class="bg-white mt-9" style="width: 1024px">
    <main class="center py-15">
      <div class="d-flex justify-space-between mb-10">
        <div class="d-flex">
          <v-img
            :src="user.imageUrl || require('../assets/images/handsome.png')"
            class="rounded-circle mr-6 d-flex"
            width="150"
            height="150"
          ></v-img>
          <div class="mr-13">
            <h2 class="my-1 mt-7">{{ `${user.firstName} ${user.lastName}` }}</h2>
            <p class="small-font">{{ user.age }}</p>
          </div>
        </div>
        <div>
          <v-btn small outlined color="primary" class="rounded-border mb-7"
            >Edit Profile</v-btn
          >
          <div class="d-flex bg-light-white rounded-border pa-2">
            <p class="mt-1 mr-3 small-font mb-0">User ID</p>
            <h4 class="font-weight-bold">{{ user.userName }}</h4>
          </div>
        </div>
      </div>

      <div class="mb-9">
        <h5 class="text-grey-5 text-muted mb-4">Personal Details</h5>
        <div class="d-flex justify-space-between">
          <div>
            <h4 class="small-font mb-2">Phone No.</h4>
            <p class="small-font">{{ user.phoneNumber }}</p>
          </div>
          <div>
            <h4 class="small-font mb-2">Date of Birth</h4>
            <p class="small-font">{{ user.dateOfBirth }}</p>
          </div>
          <div>
            <h4 class="small-font mb-2">Address</h4>
            <p class="small-font">{{ user.location }}</p>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h5 class="text-grey-5 text-muted mb-4">Driver's License</h5>
        <div>
          <h4 class="small-font mb-2">Driving license Number</h4>
          <h5 class="text-blue">EU-523779-1103-2729</h5>
        </div>
      </div>

      <div class="d-flex justify-space-between " style="width:100%">
        <div
          class="bg-light-white pa-5 rounded-border d-flex align-center justify-center"
          style="width: 180px"
        >
          <div>
            <p class="small-font mb-0">Issuing Date</p>
            <h4 class="small-font">13th May 2019</h4>
          </div>
        </div>
        <div
          class="bg-light-white pa-5 rounded-border d-flex align-center justify-center"
          style="width: 180px"
        >
          <div>
            <p class="small-font mb-0">Expiring Date</p>
            <h4 class="small-font">10th August 2023</h4>
          </div>
        </div>
        <div
          class="bg-sky-blue pa-5 rounded-border d-flex align-center justify-center"
          style="width: 180px"
        >
          <div>
            <p class="small-font mb-0">Issuing Authority</p>
            <h4 class="small-font">Ni-Direct.Gov</h4>
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
      // user: {
      //   name: "Joe Ali",
      //   age: "Age 34",
      //   phoneNumber: "(+447) 845-6289-456",
      //   dob: "22-04-1987",
      //   address: "40 Green Lane London NW04 8UB",
      // },
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  mounted()  {
    console.log(this.user)
  },
};
</script>

<style scoped>
.center {
  padding-right: 198px !important;
  padding-left: 207px !important;
}
</style>

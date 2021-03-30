<template>
    <div class="hire-duration">
        <v-container class=''> 
            <!-- <h1>Hire Duration</h1> -->
            <v-row class='pa-5'>
                <v-row class='mb-3'>
                    <v-col class='pa-0 ma-0'>
                        <v-img src='@/assets/images/bmw.png' max-width='120' class='img' />
                    </v-col>
                    <v-col class=''>
                        <h2>{{ vehicle.make }}</h2>
                        <p>{{ vehicle.model }}</p>
                    </v-col>
                </v-row>
                <v-row class=''>
                    <hire-cost price='400' />
                </v-row>
                <v-row class='my-10'>
                    <v-col md='12' class='ma-0 pa-0'>
                        <span class="subtitle-3 font-weight-bold text-sm">Duration </span> <span class='font-italic text-2'>(min 1 month)</span>
                    </v-col>
                    <v-row md='12' class='my-3 pa-0 d-flex'>
                        <v-col 
                            md='3' 
                            class='mt-item pa-4 ma-2 bg-gray' 
                            v-for="duration in durations"  
                            :class='{"active" : selectedDuration == duration}'
                            :key="duration"
                            @click='() => selectedDuration = duration'
                        >{{duration}}</v-col>
                    </v-row>

                    <v-row align='center'>
                        <v-col md='12' class='d-flex'>
                            <v-select
                                :items="durations"
                                label="Duration"
                                dense
                                solo
                                v-model='selectedDuration'
                            />
                        </v-col> 
                        <v-col md='12' class='my-0'>
                            <v-btn color='primary' @click='handleSubmit' :loading='loading' block>Proceed</v-btn>
                        </v-col>
                    </v-row>
                </v-row>
            </v-row>
        </v-container>
        <button class="faq-btn">
            <i class="ml-8 fas fa-info text-decoration-none"></i>
            FAQ's
        </button>
    </div>
</template>

<script>
import HireCost from "@/components/vehicle/HireCost";
import { mapGetters } from "vuex";
export default {
  name: "HireDuration",
  data: () => ({
    durations: [
      "1 month",
      "2 months",
      "3 months",
      "4 months",
      "5 months",
      "6 months",
    ],
    selectedDuration: "",
    vehicle: {},
    loading: false,
  }),
  components: {
    HireCost,
  },
  async beforeMount() {
    this.vehicle = await this.$store
      .dispatch("findVehicle", this.$route.params.id)
      .catch((err) => {
        console.log(err.status);
        this.$router.push({ name: "NotFound" });
      });
    if (!this.vehicle) this.$router.push({ name: "NotFound" });

    console.log(this.vehicle);
  },
  computed: {
    ...mapGetters({
      user: "user",
      hireRequest: "hireRequest",
    }),
  },
  methods: {
    beforeMount() {
      console.log(this.hireRequest.durations);
    },
    handleSubmit() {
      this.loading = true;
      this.$store
        .dispatch("updateHireRequest", { duration: this.selectedDuration, id: this.vehicle._id })
        .then((res) => {
          this.loading = false;
          this.$router.push({ name: "UploadLicense", id: this.vehicle._id });
          this.$toast.success("Hire Request has successful been updated");
        })
        .catch((err) => {
          this.loading = false;
          if (err.response && err.response.data) {
            this.$toast.error(err.response.data.message);
          } else {
            this.$toast.error(err.message);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables.scss";

.hire-duration {
  position: relative;
  background: $white;
  max-width: 445px;
  margin: auto;
  padding: 20px;
  border-radius: $border-radius;
  .img {
    border-radius: 10px;
  }
  .mt-item {
    border-radius: $border-radius;
    border: 1px solid $component-gray;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover, &.active {
      background: $white;
      border: 1px solid $deep-blue;
    }
    &:active, .active {
      background: $white;
      border: 1px solid $deep-blue;
    }
  }
  .faq-btn {
    display: block;
    position: absolute;
    top: 0px;
    right: -90px;
    background: #ebebeb;
    padding: 15px 15px;
    border-radius: $border-radius;
  }
}
</style>

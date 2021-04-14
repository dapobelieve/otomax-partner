<template>
    <div class='vehicle-profile'>
        <div class="d-flex align-right ">
            <v-btn class='edit-btn' small>Edit Vehicle</v-btn>
        </div>
        <div class="vehicle-content">
                <!-- <div class="edit-area">
                    <img src="../assets/images/Group8338.png" alt="#">
                </div> -->
            <div class="vehicle-profile-section"  style='position: relative'>
                <image-slider-thumb :images="image"/> 
                
            </div>
            <div class="vehicle-profile-section">
                <div class="hire-desc">
                    <div class="h-summary">
                        <h2>{{ vehicle.make }}</h2>
                        <span>{{ vehicle.model }}</span>
                    </div>
                    <hire-cost class='h-cost' price='400' iconLink='#' :icon='require("../assets/images/Group8338.png")' /> 
                </div>
                <div class="vehicle-summary">
                    <vehicle-brief class='summary-item' text='Auto' details='Transmission' />
                    <vehicle-brief class='summary-item' :text='vehicle.make' details='Brand' />
                    <vehicle-brief class='summary-item' :text='vehicle.model' details='Model' />
                    <vehicle-brief class='summary-item' :text='vehicle.mileage' details='Mileage' />
                    <vehicle-brief class='summary-item' :text='vehicle.bodyType' details='Body Type' />
                    <vehicle-brief class='summary-item' :text='vehicle.fuelType' details='Fuel Type' />
                </div>
                <div class="vehicle-badge">
                    <div class="v-badge">
                        <div>Color</div>
                        <strong>{{ vehicle.color }}</strong>
                    </div>

                    <div class="v-badge">
                        <div>Taxis Badge</div>
                        <strong>Yes</strong>
                    </div>

                    <div class="v-badge">
                        <div>Number of seats</div>
                        <strong>5</strong>
                    </div>

                    <div class="v-badge">
                        <div>Rating</div>
                        <strong>
                            <v-rating
                                class='h-rating'
                                length="5"
                                :value="4"
                            />
                        </strong>
                    </div>
                </div>
                <div class="license-area">
                    <div class="license">
                        <span>M.O.T license Expires Date</span>
                        <strong>15th August 2021</strong>
                    </div>
                    <div class="license">
                        <span>Taxi license Expires Date</span>
                        <strong>12th October 2021</strong>
                    </div>
                </div>
                <div class="hire-now" style='margin-top: 20px;'>
                    <!--- if a hire request already exist, we'll need another button to contnue the request-->
                    <v-btn @click="initHireRequest()" color='primary' block class='btn-long' height="40" elevation=0 :loading=loading>Hire Now</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HireCost from '@/components/vehicle/HireCost'
import ImageSliderThumb from '../components/ImageSliderThumb'
import VehicleBrief from "@/components/vehicle/VehicleBrief";

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VehicleProfile',
    data: () => ({
        image: [
            require("../assets/images/car.jpg"),
            require("../assets/images/bmw.png"),
            require("../assets/images/blue.png"),
            require("../assets/images/bmw.png"),
            require("../assets/images/bmw.png"),
            require("../assets/images/blue.png"),
            require("../assets/images/bmw.png"),
            require("../assets/images/bmw.png"),
            require("../assets/images/blue.png"),
            require("../assets/images/bmw.png"),
        ],
        vehicle: {},
    }),
    components: {
        HireCost,
        VehicleBrief,
        ImageSliderThumb
    },
    beforeMount() {
        // console.log(this.$route.params.id)
        // this.vehicle = await this.$store.dispatch('findVehicle', this.$route.params.id).catch(err => {
        //     this.$router.push({name: 'NotFound'})
        // })
        // if(!this.vehicle)
        //     this.$router.push({name: 'NotFound'})

        // console.log(this.vehicle)
    },
    methods: {
        ...mapActions({createHireRequest:"createHireRequest"}),
        initHireRequest(){
            const data = {
                vehicleId: this.vehicle._id,
                profileType: 'DRIVER',
            };
            this.loading = true;
            this.createHireRequest(data).then( res => {
                this.loading = false;
                this.$router.push({ name: 'HireDuration', id: this.vehicle._id })
            }).catch(err => {
                this.loading = false;
                if(err.response && err.response.data){
                    this.$toast.error(err.response.data.message)    
                }
                else{
                    this.$toast.error(err.message)
                }   
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/_variables.scss';

    .vehicle-profile {
        width: 100%;
        margin: 0;
        background: #fff;
        padding: 30px;
        border-radius: 13px;

        .edit-btn { color: $blue; margin-left: auto; margin-bottom: 20px; }
        .edit-area {
            // position: absolute; 
            top: -100px;
        }

        .vehicle-content {
            width: 100%;
            display: flex;

            .vehicle-profile-section {
                &:first-child {
                    flex-grow: 1;
                    max-width: 45%;
                    padding: 0 20px;
                }
                &:last-child { flex-grow: 1.1;}

                .hire-desc {
                    display: flex;
                    place-items: center;
                    margin-bottom: 40px;
                    .h-summary { padding: 0 20px; }
                    .h-cost { margin-left: auto; }
                }
                .vehicle-summary {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(150px, 1fr));
                    grid-gap: 15px;
                }
                .vehicle-badge {
                    .v-badge {
                        width: auto;
                        min-width: 21%;
                        background: #F9F9F9;
                        padding: 20px;
                        text-align: center;
                        display: inline-block;
                        margin: 10px;
                        border-radius: 10px;
                        div {
                            font-size: .75rem;
                        }
                        strong { 
                            font-size: .9rem; 
                        }
                        .h-rating button {
                            padding: 0 !important;
                        }
                    }
                }
                .license-area {
                    display: flex;
                    .license {
                        // display: inline-block;
                        padding: 10px 20px;
                        background: #ECF9FF;
                        margin: 10px;
                        width: 50%;
                        border-radius: 10px;

                        &:last-child {
                            background: #FFF9D1;
                        }

                        span { display: block; margin-bottom: 5px; font-size: .8rem; }
                        strong { display: block; font-size: .9rem; }
                    }
                }
                .hire-now {
                    width: 100%;
                    text-align: right;
                    .btn {
                        padding: 10px 40px;
                    }
                }
            }
        }

    }
</style>

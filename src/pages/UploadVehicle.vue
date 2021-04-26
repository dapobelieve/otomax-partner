<template>
    <div class='edit-vehicle-profile'>
        <div class="edit-header py-6 px-12">
            <h2>Upload Vehicle</h2>
            <p>Please provide the following vehicle details.</p>
        </div>
        <div class="edit-content">
            <h3 class='edit-header-info mb-10 mt-15'>Vehicle Information</h3>

            <div class="form-area">
                <form action="#" @submit.prevent='handleSubmit()'>
                    <v-row>
                        <v-col>
                            <p>Registration number (number plate)</p>
                            <form-input placeholder='DU4-09AKG' />
                        </v-col>
                        <v-col>
                            <p>Number of Seats</p>
                            <form-input placeholder='4' type='number'/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p>Make</p>
                            <form-input placeholder='BMW' />
                        </v-col>
                        <v-col>
                            <p>Model</p>
                            <form-input placeholder='X5' />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p>Year</p>
                            <form-input placeholder='2018' />
                        </v-col>
                        <v-col>
                            <p>Color</p>
                            <form-input placeholder='Blue' />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p>Body Type</p>
                            <form-input placeholder='Salon'  />
                        </v-col>
                        <v-col>
                            <p>Fuel Type</p>
                            <form-input placeholder='Petrol' />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p>Transmission Type</p>
                            <select-input 
                                label='Auto'
                                :items="transmissionTypes"
                                class='pa-0'
                                
                            />
                        </v-col>
                        <v-col>
                            <p>Current Mileage</p>
                            <form-input placeholder='5000 - 10000' />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p>Vehicle Age</p>
                            <form-input placeholder='3 years' />
                        </v-col>
                        <v-col>
                            <p>Taxi Badge</p>
                            <select-input 
                                label='Yes'
                                :items="['Yes', 'No']"
                                class='pa-0'
                            />
                        </v-col>
                    </v-row>

                    <!-- License Details area -->
                    <div class="license-details">   
                        <h3 class='edit-header-info mb-10 mt-12'>License Details</h3>

                        <v-row>
                            <v-col>
                                <p>Taxi license Expiry date</p>
                                <app-date-picker placeholder='dd/mm/yy' />
                            </v-col>
                            <v-col>
                                <p>Taxi license Upload</p>
                                <simple-file-upload name='licenseFile' placeholder='Upload file name' />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <p>MOT license Expiry date</p>
                                <app-date-picker placeholder='dd/mm/yy' />
                            </v-col>
                            <v-col>
                                <p>MOT license Upload</p>
                                <simple-file-upload name='motFile' placeholder='Upload file name' />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <p>Road tax Expiry date</p>
                                <app-date-picker placeholder='dd/mm/yy' />
                            </v-col>
                            <v-col>
                                <p>Vehicle log book Upload</p>
                                <simple-file-upload name='logFile' placeholder='Upload file name' />
                            </v-col>
                        </v-row>
                    </div>

                    <div class="d-flex mt-12">
                        <v-btn type='submit' color='primary' block class='btn-long' height="40" elevation='0' :loading=loading href='/vehicle-images'>
                            <small>Proceed</small>
                        </v-btn>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import FormInput from '@/components/forms/FormInput'
import SelectInput from '@/components/forms/SelectInput'
import SimpleFileUpload from '@/components/forms/SimpleFileUpload'
import AppDatePicker from '@/components/forms/AppDatePicker'


export default {
    name: 'UploadVehicle',
    data: () => ({
        loading: false,
        vehicle: {
            make: 'BMW X5',
            model: '2018 Series',
        },
        transmissionTypes: [ 'All'],
    }),
    components: {
        FormInput,
        SelectInput,
        SimpleFileUpload,
        AppDatePicker,
    }, 
    methods: {
        handleSubmit() {
            this.loading = true;
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/_variables.scss';

    .edit-vehicle-profile {
        width: 100%;
        margin: 0;
        background: #fff;
        padding: 30px;
        border-radius: 13px;

        .edit-header { 
            background-color: #ECF9FF; 
            border-radius: $border-radius;    
        }
        .edit-content {
            width: 80%;
            margin: 30px auto;

            .edit-header-info { color: #616161; }
        }

    }
</style>

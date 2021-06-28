<template>
  <v-container class='mt-3 border-radius'>
    <status-component title='Not Available for Hire' />

    <div class="vehicle-listing bg-white mt-9 pt-4 border-radius">
        <div class="v-list-items pa-6 d-flex flex-wrap">
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
            <vehicle-list-item brand='BMW X5' model='2018 Series' />
        </div>
    </div>
  </v-container>
</template>

<script>
import StatusComponent from '../components/vehicle/StatusComponent'
import VehicleListItem from '../components/vehicle/VehicleListItem'


export default {
    name: 'VehicleListing',
    data: () => ({

    }),
    components: { 
        StatusComponent,
        VehicleListItem,
    },
}
</script>

<style lang="scss" scoped>
    .border-radius { border-radius: 8px; }
    .vehicle-listing {
        box-sizing: border-box;
        .v-list-items {
            margin: auto;
            display: grid !important;
            grid-template-columns: repeat(4, minmax(250px, 1fr));
            align-items: center;
            justify-items: center;
            grid-row-gap: 30px;
            column-gap: 30px;
            @media screen and (max-width: 1618px) {
                grid-template-columns: repeat(3, minmax(250px, 1fr));
            }
        }
    }
</style>
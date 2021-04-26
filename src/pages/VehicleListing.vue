<template>
  <v-container class='pt-15 border-radius' style='width: 70%'>
    <status-component title='Not Available for Hire' />

    <div class="vehicle-listing bg-white mt-9 pt-4 border-radius">
        <div class="v-list-items pa-6">
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
        .v-list-items {
            margin: auto;
            display: grid;
            grid-template-columns: repeat(3, minmax(250px, 1fr));
            align-items: center;
            justify-items: center;
            grid-row-gap: 35px;
            column-gap: 10px;
            @media screen and (max-width: 1618px) {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
        }
    }
</style>
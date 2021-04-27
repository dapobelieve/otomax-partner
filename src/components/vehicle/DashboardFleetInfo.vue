<template>
    <div class="dashboard-fleet-info" :style="{ backgroundColor: background }">
        <div class="d-flex align-center">
            <div>
                <v-img :src='icon' width='35' />
            </div>
            <h5 class='ml-4'>{{ headerText }}</h5>
        </div>
        <div class="v-model-info mt-4">
            <h3>{{ brand }}</h3>
            <span>{{ model }}</span>
        </div>
        <div class="v-car-info d-flex pa-4 my-5 align-center">
            <div class='mr-12'>
                <small>{{ bodyText }}</small>
            </div>
            <div class='ml-auto'>
                <h5>{{ bodyDetails }}</h5>
            </div>
        </div>
        <div class='d-flex'>
            <v-btn color='primary' class='ml-auto' elevation="0" small><small>{{ linkText }}</small></v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardFleetInfo',
    props: {
        icon: { type: String, default: require('@/assets/images/Incomplete.png') },
        headerText: { type: String, },
        bodyText: { type: String, },
        bodyDetails: { type: String, },
        model: { type: String, },
        brand: { type: String, },
        href: { type: String, },
        linkText: { type: String, },
        background: { type: String, default: '#fff' }
    },
}
</script>

<style lang="scss" scoped>
    .dashboard-fleet-info {
        box-shadow: 5px 21px 20px rgb(191 191 191 / 17%);
        padding: 30px;
        background: #fff;
        border-radius: 8px;

        .v-car-info {
            background: #F9F9F9;
            border-radius: 8px;
        }
        .btn { text-align: right;}
    }
</style>
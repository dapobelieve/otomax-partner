<template>
    <div class="dashboard-item pa-6">
        <div class="d-flex align-center mr-12">
            <div class="img-area mr-4">
                <img :src="icon" alt="" width='35'>
            </div>
            <div class="content">
                <h5>{{ title }}</h5>
            </div>
        </div>

        <div class="d-flex mt-10 align-center" style='width: 100%'>
            <div class='count ml-3 mr-auto'>{{ count }}</div>
            <div style='margin-left: auto'>
                <router-link class="btn v-btn v-size--small primary v-btn--has-bg" :to="{name: 'vehicle-create'}"><small>Add new vehicle</small></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardItem',
    props: {
        title: { type: String, required: true },
        count: { type: String, required: false, default: '0' },
        btnText: { type: String, default: 'View' },
        href: { type: String, default: '#' },
        icon: { type: String, required: false, default: require('@/assets/images/Group8461.png') },
    },
}
</script>

<style lang="scss" scoped>
    @import  '@/assets/css/_variables.scss';
    .dashboard-item {
        display: block;
        box-shadow: 5px 21px 20px rgb(191 191 191 / 17%);
        border-radius: 8px;
        max-width: 320px;
        background-color: $white;
        .count {
            font-weight: bold;
            font-size: 2rem;
        }
    }
</style>
<template>
    <v-row class="dashboard-item pa-6" elevation='4'>
        <div class="d-flex align-center mr-12">
            <div class="img-area mr-4">
                <img :src="icon" alt="" width='35'>
            </div>
            <div class="content">
                <h4>{{ title }}</h4>
            </div>
        </div>

        <div class="d-flex mt-10 align-center" style='width: 100%'>
            <div class='count ml-3 mr-auto'>{{ count }}</div>
            <div style='margin-left: auto'>
                <v-btn elevation="0" class='btn' :href='href' color='primary'><small>{{ btnText }}</small></v-btn>
            </div>
        </div>
    </v-row>
</template>

<script>
export default {
    name: 'DashboardItem',
    props: {
        title: { type: String, required: true },
        count: { type: String, required: false, default: '0' },
        btnText: { type: String, default: 'View' },
        href: { type: String, default: '#' },
        icon: { type: String, required: false, default: require('@/assets/images/InReview.png') },
    },
}
</script>

<style lang="scss" scoped>
    @import  '@/assets/css/_variables.scss';
    .dashboard-item {
        display: block;
        box-shadow: 0px 10px 100px #00000008;
        border-radius: 4px;
        max-width: 320px;
        .count {
            font-weight: bold;
            font-size: 2rem;
        }
    }
</style>
<template>
    <div class="status-component bg-white pa-2 px-8" style="border-radius: 8px;">
        <div class="d-flex align-center">
            <div>
                <div class="d-flex align-center">
                    <img :src="icon" alt="">
                    <h2 class='ml-6'>{{ title }}</h2>
                </div>
            </div>
            <div class="count-area ml-auto text-center">
                <div class="count">
                    {{ count }}
                </div>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatusComponent',
    props: {
        icon: { type: String, required: false, default: require('@/assets/images/InReview.png') },
        title: { type: String, required: true, },
        description: { type: String, required: false, default: 'Vehicles' },
        count: { type: String, required: false, default: '0'},
    },
}
</script>

<style lang="scss" scoped>
    .count {
        font-weight: bold;
        font-size: 2rem;
    }
</style>
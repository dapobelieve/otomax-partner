<template>
    <div class='expire-info pa-4' :style='{backgroundColor: color}'>
        <div class='d-flex'>
            <div>
                <p class='ma-0 mb-2'>{{ description }}</p>
                <h4>{{ title }}</h4>
            </div>
            <div style='margin-left: auto; align-self: flex-end'>
                <slot>
                    <!-- <v-btn small color='white' class='btn' elevation='0' :href='href'>{{ btnText }}</v-btn> -->
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExpireInfo',
    props: {
        title: {  type: String, },
        description: { type: String },
        color: { type: String, default: '#ECF9FF', },
        btnText: { type: String, default: 'View' },
        href: { type: String, default: '#' },
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/css/_variables.scss';
    .expire-info {
        border-radius: $border-radius;
        .btn { color: $blue; }
    }
</style>
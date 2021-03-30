<template>
    <div id="info-chip" class='pa-4 px-12 py-8' :style="{ backgroundColor: color, } ">
        <div class='text-center'>
            <p class='ma-0 mb-2'>{{ description }}</p>
            <h4>{{ title }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoChip',
    props: {
        title: {  type: String, },
        description: { type: String },
        color: { type: String, default: '#FFC4C4', }
    },
}
</script>

<style lang="scss" scoped>

    @import '../../assets/css/_variables.scss';

    #info-chip {
        border-radius: $border-radius;
    }
</style>
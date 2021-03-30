<template>
    <div id="car-info">
        <div class="d-flex">
            <div>
                <v-img :src="src" width='120' height='100%' class='img' />
            </div>
            <div class='ml-8 py-4 pb-0'>
                <p class='h-title'>{{ header }}</p>
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
            <div  class='side d-flex mr-6'>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarInfoCard',
    data: () => ({ }),
    props: {
        header: { type: String, default: 'Active Hire'  },
        src: { required: true, type: String},
        title: { type: String, required: true, },
        description: { type: String, default: '',  },
    },
}
</script>

<style lang="scss" scoped>
  
    @import '../../assets/css/_variables.scss';

    #car-info {
        background: #F1F1FC;
        border-radius: $border-radius;

        .img { border-radius: 10px;  }
        .h-title { color: $blue }
        .side {
            margin-left: auto;
            flex-direction: column;
            justify-content: center;
        }
    }
</style>
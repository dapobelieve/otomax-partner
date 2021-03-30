<template>
    <div id='time-left' class='pa-6'> 
        <div class="top-area d-flex">
            <p>{{ description }}</p>
            <div style='margin-left: auto'>
                <v-img class='img' src="@/assets/images/question.png" width='20' />
            </div>
        </div>
        <div>
            <h2>{{ time }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HireTimeLeft',
    data: () => ({}),
    props: {
        time: { type:  String, required: true, },
        description: { type: String, required: true, }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/css/_variables.scss';
    #time-left {
        background: #ECF9FF;
        border-radius: $border-radius;
        .top-area {
            p { width: 30%; }
        }
        h2 { text-align: right; }
    }
</style>
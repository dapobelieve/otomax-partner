<template>
    <div class='vehicle-brief'>
        <div class="item">
            <small class="text-muted">{{ details }}</small>
            <h4>{{ text }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VehicleBrief',
    props: {
        text: { required: true, type: [String, Number], default: '' },
        details: { required: false, type: String },
    },
}
</script>

<style lang="scss" scoped>
    .vehicle-brief {
        width: max-content;
        padding: 15px;
        p { font-family: 'sans-serif, Roboto' !important; font-size: .9rem; margin-bottom: 0; }
    }
</style>
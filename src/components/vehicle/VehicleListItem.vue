<template>
    <div class='vehicle'>
        <div class="content">
            <h2>{{ brand }}</h2>
            <p>{{ model }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VehicleListItem',
    props: {
        brand: { type: String, },
        model: { type: String, },
        photo: { type: String,  },
    },
}
</script>

<style lang="scss" scoped>
    .vehicle {
        border-radius: 8px;
        height: auto;
        width: 250px;
        // background: 

        .content {
            background: transparent linear-gradient(180deg, #00000000 0%, #000000A1 58%, #000000DE 100%) 0% 0% no-repeat padding-box;
            padding: 40px 20px 10px;
            color: #fff;
            margin-top: 210px;
        }
    }
</style>
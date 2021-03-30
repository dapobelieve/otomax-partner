<template>
    <div>
        <div class="head d-flex my-6">
          <h4>Recent</h4>
          <p class='ma-0 ml-auto'>Transactions</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotifyHeader",
    props: {
      leftHeader: { type: String },
      rightHeader: { type: String },
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/css/_variables';
    .head {
        p { color: darken($gray, 40%); }
    }
</style>

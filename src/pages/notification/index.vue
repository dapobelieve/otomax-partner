<template>
  <v-container fluid class="px-md-12 px-6">
    <v-row class="fill-height" justify="space-around">
      <v-col cols=3>
        <Ocard class="notify-area">
          <v-row class="fill-height">
            <h2 class="ms-2 mt-2">Notifications</h2>
          </v-row>
        </Ocard>
      </v-col>
      <v-col cols=8>
        <Ocard class="notify-area">
          <v-row class="fill-height" align-content="center" justify="center">
             <v-col class="text-center" cols=4>
                <img :src="require('@/assets/images/notification.svg')" class="mb-3" alt="">
                <br>
                <span>Select a notification to open</span>
             </v-col>
          </v-row>
        </Ocard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  components: {
    Ocard: () => import("@/components/OtomaxCard"),
  }
}  
</script>
<style scoped lang="scss">
.notify-area {
  height: calc(100vh - 90px);
}  
</style>
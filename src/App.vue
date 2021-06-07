<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
	name: "App",
	mounted() {
	}
};
</script>

<style scoped>
.theme--light.v-application {
	background: #F9F9F9  !important;
}
</style>

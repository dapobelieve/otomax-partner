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

<style>
.theme--light.v-application {
	background: #F9F9F9  !important;
}

button::before {
	opacity: 0 !important;
}

.v-ripple__container {
	/*display: none !important;*/
}
</style>

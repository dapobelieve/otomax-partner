<template>
  <v-app-bar app color="white">
    <v-container>
      <div class="d-flex align-center">
        <v-img
          alt="Otomax Logo"
          class="shrink mr-2"
          contain
          src="../assets/images/logo-black.svg"
          transition="scale-transition"
          width="70"
        />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AuthHeader',
}
</script>

<template>
  <v-container fluid>
        <v-select
          dense
          solo
          v-on='$listeners'
          v-bind='$attrs'
        ></v-select>
  </v-container>
</template>

<script>
  export default {
  }
</script>

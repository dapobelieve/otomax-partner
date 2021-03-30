<template>
  <main fluid>
    <v-text-field
      flat
      class="pa-0"
      solo
      v-on='$listeners'
      v-bind='$attrs'
    ></v-text-field>
  </main>
</template>

<script>
export default {
  name: 'FormInput',
};
</script>

<style scoped></style>

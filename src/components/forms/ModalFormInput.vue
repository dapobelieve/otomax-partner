<template>
  <main fluid>
    <v-text-field
      flat
      solo
      v-on='$listeners'
      v-bind='$attrs'
      color='black' 
      background-color='#fff' 
      light 
    ></v-text-field>
  </main>
</template>

<script>
export default {
  name: 'ModalFormInput'
}
</script>
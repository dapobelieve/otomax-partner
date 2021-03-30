<template>
  <div>Filter Page
    <br>
    <button class='btn' @click='openModal'>click to Open Sign up modal</button>
    <login-modal :isOpen='open' @close-modal='closeModal' />
  </div>
</template>
<script>

import LoginModal from '@/components/modal/LoginModal'

export default {
  name: 'FilterPage',
  data: () => ({
    open: false,
  }),
  methods: {
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
    },
  },
  components: {
    LoginModal,
  },
}

</script>
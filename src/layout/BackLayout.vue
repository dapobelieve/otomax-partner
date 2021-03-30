<template>
  <main>
    <div class="back-button">
      <img @click='goBack()' class='bck' src="@/assets/images/icon-back.png" alt="#">

      <div class="content">
        <div class="view">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  },
}
</script>

<style lang="scss" scoped>
  .back-button {
    padding: 20px 60px;
    img.bck {
      position: absolute;
      top: 20px;
      width: 50px;
      cursor: pointer;
    }
    .content {
      width: 75%;
      margin: auto;
      margin-top: 10px;
      .view { width: 100%; }
    }
  }
</style>
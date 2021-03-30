<template>
  <div class="hire-cost">
    <div class="hire-top">
      <div class="hire-item">
        <h4>Vehicle Hiring</h4>
        <small>Cost</small>
      </div>
      <div class="hire-item">
        <span class="price">$ {{ price }}</span>
        <div class="per-week">
          <b>Per Week</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HireCost",
  data: () => ({}),
  props: {
    price: { required: true, type: String },
  },
};
</script>

<style lang="scss" scoped>
.hire-cost {
  background: #cefff2;
  width: 100%;
  max-width: 400px;
  padding: 15px 20px;
  border-radius: 14px;

  .hire-top {
    display: flex;
    .hire-item {
      place-self: center;
      p {
        margin: 10px;
        font-family: "Roboto, sans-serif" !important;
        font-size: 0.9rem;
        width: 80%;
      }
      // &:first-child { margin-right: 70px; }
      &:last-child {
        margin-left: auto;
        .price {
          font-size: 2rem;
        }
        .per-week {
          color: #2633ec;
          text-align: right;
        }
      }
    }
  }
}
</style>
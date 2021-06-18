<template>
  <Ocard color="#cefff2" class="hire-cost">
    <div class="hire-top d-flex">
      <div class="hire-item">
        <EditHirePriceModal />
        <h4>Vehicle Hiring</h4>
        <small>Cost</small>
      </div>
      <div class="hire-item">
        <span class="price font-weight-bold">£ {{ price }}</span>
        <div class="per-week">
          <b>Per Week</b>
        </div>
      </div>
    </div>
  </Ocard>
</template>

<script>
export default {
  name: "HireCost",
  data: () => ({}),
  components: {
    Ocard: () => import("@/components/OtomaxCard"),
    EditHirePriceModal: () => import("@/components/modal/EditHirePriceModal")
  },
  props: {
    price: { required: true, type: Number },
    icon: { required: false, type: String },
    iconLink: { required: false, type: String },
  },
};
</script>

<style lang="scss" scoped>
.hire-cost {
  background: #cefff2;
  width: 100%;
  max-width: 400px;

  .hire-top {
    .hire-item {
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
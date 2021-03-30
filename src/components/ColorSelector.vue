<template>
  <main>
    <div>
      <div class="d-flex justify-space-between mt-10">
        <div class="d-flex flex-column">
          <div
            class="d-flex py-1 mt-1 align-items-center color-item"
            v-for="($color, index) in colors.slice(0, 7)"
            :key="index"
            :class="{ active: color.selected == $color }"
          >
            <button
              class="rounded-lg ml-1"
              :class="{ [`bg-${$color}`]: true }"
              @click="changeColor($color)"
            ></button>
            <p class="my-0 ml-1">{{ $color }}</p>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div
            class="d-flex py-1 mt-1 align-items-center color-item"
            v-for="$color in colors.slice(8)"
            :key="$color"
            :class="{ active: color.selected == $color }"
          >
            <button
              class="rounded-lg ml-1"
              :class="{ [`bg-${$color}`]: true }"
              @click="changeColor($color)"
            ></button>
            <p class="my-0 ml-1">{{ $color }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "black",
        "yellow",
        "green",
        "purple",
        "pink",
        "multi",
        "all",
        "cyan",
        "blue",
        "lemon",
        "red",
        "brown",
        "white",
      ],
      color: {
        selected: "",
      },
    };
  },
  methods: {
    changeColor(color) {
      this.color.selected = color
      this.$emit('change-color', color)
    },
  },
};
</script>

<style scoped lang="scss">
.color-item {
  border-radius: 10px; 
  width: 100px;

  &.active {
    border: 1px solid #2633ec;
  }
  button {
    height: 20px;
    width: 20px;
    border: 1px solid gray;
  }
}
</style>

<template>
  <div>
    <label for="">{{label}}</label>
    <v-select :value="value" 
      @change="handleChange($event)" 
      :placeholder="placeholder" 
      :class="[error ? 'has-error' : '' ]" class="mt-2" 
      flat solo 
      items.text="text" 
      items.value="value" 
      :items="items" />
      <small v-if="error" class="ms-2 error--text">{{message}}</small>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "",
      required: false
    },
    placeholder: {
      type: String,
      default: "",
      required: false
    },
    // pass an array of objects [text => "value"]
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.v-input {
  &.has-error {
    .v-input__slot {
      border: 1px solid red;
    }
  }
}
.v-input__control {
  .v-text-field__details {
    display: none;
  }
  .v-messages {
    display: none
  }
}

::v-deep .v-input__slot {
  background-color: var(--v-light_grey-base) !important;
  border-radius: $border-radius !important;
}
</style>

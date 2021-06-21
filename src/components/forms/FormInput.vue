<template>
  <div class="otomax-input">
    <label>{{label}}</label>
    <v-text-field
      :class="[classes, error ? 'has-error' : '' ]"
      class="mt-2"
      @input="handleEvent"
      :value="value"
      :type="type"
      elevation="0"
      :required="required"
      solo
      flat
      :placeholder="placeholder"
      :autofocus="false"
      />
      <small v-if="error" class="ms-2 error--text">{{message}}</small>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    },
    value: {},
    message: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    position: {
      type: String,
      default: "left"
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
    }
  },
  name: 'FormInput',
  methods: {
    handleEvent(e) {
      this.$emit('input', e)
    }
  },
  computed: {
    classes () {
      let classes =""
      classes+=`${this.position} ` ;

      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-input {
  &.left {
    input {
      text-align: left ;
    }
  }
  &.center {
    input {
      text-align: center ;
    }
  }
  &.right {
    input {
      text-align: right ;
    }
  }
  &.has-error {
    .v-input__slot {
      border: 1px solid red !important;
    }
  }

  .v-input__slot {
    background-color: var(--v-light_grey-base) !important;
    border-radius: 0.85rem !important;

    &.error {
      border: 1px solid red !important;
    }
    .v-text-field__slot {
      .v-label {
        display: none;
      }
    }
  }

  .v-text-field__details {
    display: none;
  }
}

</style>

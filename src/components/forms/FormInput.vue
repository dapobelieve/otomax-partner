<template>
  <div>
    <slot name="label"></slot>
    <v-text-field
      :class="classes"
      class="mt-2"
      @input="handleEvent"
      :value="value"
      elevation="0"
      :required="required"
      solo
      flat
      :placeholder="placeholder"
      :autofocus="false"
    >
      
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
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

      classes+=`${this.position} `      ;

      return classes;
    }
  }
};
</script>

<style lang="scss">
.v-input {
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
}
.v-input__slot {
  background-color: var(--v-light_grey-base) !important;
  border-radius: 0.85rem !important;

  .v-text-field__slot {

    .v-label {
      display: none;
    }
  }
}

.v-text-field__details {
  display: none;
}

</style>

<template>
	<div>
		<label for="">{{label}}</label>
		 <v-menu
	      ref="menu1"
	      v-model="menu1"
	      :close-on-content-click="false"
	      transition="scale-transition"
	      max-width="290px"
	      min-width="auto"
	    >
	      <template v-slot:activator="{ on, attrs }">
	        <v-text-field
	        	:class="[error ? 'has-error' : '']"
	        	class="mt-2"
	          v-model="computedDateFormatted"
	          label="Date"
	          v-bind="attrs"
	          solo
	          flat
	          append-icon="mdi-calendar-today text-grey-5"
	          placeholder="dd/mm/yy"
	          v-on="on"
	        ></v-text-field>
	      </template>
	      <v-date-picker
	        v-model="date"
	        :value="value"
	        no-title
	        @input="menu1 = false; $emit('input', date)"
	      ></v-date-picker>
	    </v-menu>
	</div>
</template>
<script>
import format from 'date-fns/format'	
export default {
	props: {
		value: {
			type: [String, Array]
		},
		error: {
			type: Boolean
		},
		label: {
			type: String,
			required: false
		}
	},
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
  }),
  computed: {
    computedDateFormatted () {
    	return format(new Date(this.date), "do  LLLL  Y")
    },
  },
  watch: {
    date (val) {
      this.formatDate(this.date)
    },
    value: {
    	immediate: true,
    	handler (newVal, oldVal) {
    		if(newVal) {
    			this.formatDate(newVal)
    		}    		
    	}
    }
  },
  methods: {
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
::v-deep .v-input {
	.v-input__slot {
		background-color: var(--v-light_grey-base) !important;
		border-radius: $border-radius;
	}
&.has-error {
    .v-input__slot {
      border: 1px solid red;
    }
 }	
}
</style>
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
	        	class="mt-2"
	          v-model="dateFormatted"
	          label="Date"
	          v-bind="attrs"
	          solo
	          flat
	          append-icon="mdi-calendar-today text-grey-5"
	          placeholder="dd/mm/yy"
	          @blur="date = parseDate(dateFormatted)"
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
export default {
	props: {
		value: {
			type: [String, Array]
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
      return this.formatDate(this.date)
    },
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
    value: {
    	immediate: true,
    	handler (newVal, oldVal) {
    		if(newVal) {
    			this.dateFormatted = this.formatDate(newVal)
    		}    		
    	}
    }
  },
  methods: {
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>
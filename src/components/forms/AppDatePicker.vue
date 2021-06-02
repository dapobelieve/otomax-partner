<template>
    <div class="app-datepicker full-width">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
            <template  v-slot:activator="{ on, }">
                <form-input 
                    append-icon='mdi-calander' 
                    v-on='on'
                    v-bind='$attrs' 
                    :value='date' 
                />
            </template>
            <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
            /> 
        </v-menu>
    </div>
</template>

<script>
import FormInput from "@/components/forms/FormInput"

export default {
    name: 'AppDatePicker',
    components: {
        FormInput,
    },
    data: () => ({
      date: '',
      menu: false,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
        this.date = date;
      },
    },
}
</script>

<style lang="scss" scoped>
.app-datepicker {
    position: relative;
}
</style>
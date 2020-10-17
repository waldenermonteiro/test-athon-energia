<template>
  <div>
    <v-row>
      <v-col class="col-xs-12">
        <v-text-field v-model="form.text" @click:clear="clearPropOfForm(form, 'text')" outlined dense label="Text Filter" clearable prepend-icon="mdi-card-text"></v-text-field>
      </v-col>
      <v-col class="col-xs-12">
        <v-select
          v-model="form.crime_type"
          @click:clear="clearPropOfForm(form, 'crime_type')"
          outlined
          dense
          label="Types of Crime"
          clearable
          prepend-icon="mdi-folder-open"
          :items="typesOfCrime"
          item-text="tx_type"
          item-value="id_crime_type"
        ></v-select>
      </v-col>
      <v-col class="col-xs-12">
        <v-select
          v-model="form.order_by"
          @click:clear="clearPropOfForm(form, 'order_by')"
          outlined
          dense
          label="Order By"
          clearable
          prepend-icon="mdi-form-dropdown"
          :items="orderBy"
        ></v-select>
      </v-col>
      <v-col class="col-xs-12">
        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="initialDatetimeFormatted"
              @click:clear="clearPropOfForm(form, 'initial_datetime')"
              outlined
              dense
              label="Date - From"
              clearable
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="form.initial_datetime = $formatFrontDateToApi(initialDatetimeFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="form.initial_datetime" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="col-xs-12">
        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="finalDatetimeFormatted"
              @click:clear="clearPropOfForm(form, 'final_datetime')"
              outlined
              dense
              label="Date - To"
              clearable
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="form.final_datetime = $formatFrontDateToApi(finalDatetimeFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="form.final_datetime" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col class="col-xs-12 col-7">
        <v-row class="justify-center">
          <v-btn @click="clearForm()" class="col-xs-6 col-3 ma-2">
            <v-icon left dark>
              mdi-delete
            </v-icon>
            Clear
          </v-btn>
          <v-btn @click="filter(form)" class="btn-search-color col-xs-6 col-3 ma-2">
            <v-icon left dark>
              mdi-magnify
            </v-icon>
            Filter
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import masks from '../../../mixins/masks'
export default {
  mixins: [masks],
  data: vm => ({
    form: {},
    formOrigin: {
      text: '',
      crime_type: '',
      order_by: '',
      initial_datetime: '',
      final_datetime: ''
    },
    initialDatetimeFormatted: vm.$formatApiDateToFront(new Date().toISOString().substr(0, 10)),
    finalDatetimeFormatted: vm.$formatApiDateToFront(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),
  computed: {
    ...mapState('Crime', ['typesOfCrime', 'orderBy'])
  },
  mounted () {
    this.form = { ...this.formOrigin }
    this.$list({ urlDispatch: 'Crime/listTypesOfCrime' })
  },
  watch: {
    'form.initial_datetime' (val) {
      this.initialDatetimeFormatted = val !== '' ? this.$formatApiDateToFront(val) : ''
    },
    'form.final_datetime' (val) {
      this.finalDatetimeFormatted = val !== '' ? this.$formatApiDateToFront(val) : ''
    }
  },

  methods: {
    clearForm () {
      this.form = { ...this.formOrigin }
    },
    filter (form) {
      this.$list({ urlDispatch: 'Crime/list', params: { ...form } })
    },
    clearPropOfForm (form, prop) {
      this.$list({ urlDispatch: 'Crime/list', params: { ...form, [prop]: '' } })
    }
  }
}
</script>

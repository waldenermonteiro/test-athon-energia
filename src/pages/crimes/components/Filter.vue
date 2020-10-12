<template>
  <div>
    <v-row>
      <v-col class="col-xs-12">
        <v-text-field v-model="form.text" outlined dense label="Text Filter" clearable prepend-icon="mdi-card-text" ></v-text-field>
      </v-col>
      <v-col class="col-xs-12">
        <v-text-field v-model="form.typeOfCrime" outlined dense label="Type of Crime" clearable prepend-icon="mdi-folder-open"></v-text-field>
      </v-col>
      <v-col class="col-xs-12">
        <v-text-field v-model="form.orderBy" outlined dense label="Order By" clearable prepend-icon="mdi-form-dropdown"></v-text-field>
      </v-col>
      <v-col class="col-xs-12">
        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="form.dateFrom" transition="scale-transition" offset-y min-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="form.dateFrom" outlined dense label="Date - From" clearable prepend-icon="mdi-calendar" v-bind="attrs" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="form.dateFrom" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(form.dateFrom)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="col-xs-12">
        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="form.dateTo" transition="scale-transition" offset-y min-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="form.dateTo" outlined dense label="Date - To" clearable prepend-icon="mdi-calendar" v-bind="attrs" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="form.dateTo" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.menu2.save(form.dateTo)">
              OK
            </v-btn>
          </v-date-picker>
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
          <v-btn class="search-btn-color col-xs-6 col-3 ma-2">
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
export default {
  data () {
    return {
      form: { ...this.formOrigin },
      formOrigin: {
        text: '',
        typeOfCrime: '',
        orderBy: '',
        dateFrom: new Date().toISOString().substr(0, 10),
        dateTo: new Date().toISOString().substr(0, 10)
      },
      menu: false,
      menu2: false
    }
  },
  methods: {
    clearForm () {
      this.form = { ...this.formOrigin }
    }
  }
}
</script>

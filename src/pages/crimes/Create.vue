<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card class="main--background">
        <v-toolbar dark class="default--background">
          <v-toolbar-title><span class="font-24">New Crime</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="closeModal()">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="form.country"
                    required
                    :rules="countryRules"
                    outlined
                    dense
                    label="Country * "
                    hint="Enter the name of country"
                    persistent-hint
                    clearable
                    :items="countries"
                    item-text="name"
                    item-value="name"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dateFormatted"
                        required
                        :rules="dateRules"
                        outlined
                        dense
                        label="Date*"
                        clearable
                        v-bind="attrs"
                        @blur="form.date = $formatFrontDateToApi(dateFormatted)"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="form.date" no-title @input="menu = false"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="form.typeOfCrime"
                    outlined
                    dense
                    label="Types of Crime"
                    clearable
                    :items="typesOfCrime"
                    item-text="tx_type"
                    item-value="id_crime_type"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select v-model="form.criminal" outlined dense label="Criminal" clearable :items="criminals" item-text="tx_name" return-object></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="form.weaponsList"
                    outlined
                    dense
                    label="Weapon (optional)"
                    clearable
                    multiple
                    :items="weapons"
                    item-text="tx_weapon_type"
                    item-value="id_weapon"
                  ></v-select>
                </v-col>
                <v-col md="6">
                  <v-select
                    v-model="form.victimsList"
                    outlined
                    dense
                    label="Victim (optional)"
                    clearable
                    multiple
                    :items="victims"
                    item-text="tx_name"
                    item-value="id_victim"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-btn :disabled="!form.criminal" @click="addCriminal(form)" class="v-picker--full-width btn-default">
                    <v-icon left dark>
                      mdi-plus
                    </v-icon>
                    Add Criminal
                  </v-btn>
                </v-col>
                <v-col cols="12" md="12">
                  <ListCriminals />
                </v-col>
              </v-row>
              <small>*indicates required field</small>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn :disabled="!valid" @click="save(form, criminalsForm)" class="default--background">
            <v-icon left dark>
              mdi-plus
            </v-icon>
            Save a new crime
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import ListCriminals from '../criminals/List'
import masks from '../../mixins/masks'
export default {
  mixins: [masks],
  components: {
    ListCriminals
  },
  data: () => ({
    dialog: false,
    valid: true,
    menu: false,
    countryRules: [v => !!v || 'Coutry is required'],
    dateRules: [v => !!v || 'Date is required'],
    form: {
      country: '',
      typeOfCrime: '',
      date: '',
      criminal: '',
      weaponsList: [],
      victimsList: []
    },
    dateFormatted: ''
  }),
  computed: {
    ...mapState('Crime', ['typesOfCrime', 'countries']),
    ...mapState('Criminal', ['criminals', 'criminalsForm']),
    ...mapState('Victim', ['victims']),
    ...mapState('Weapon', ['weapons'])
  },
  watch: {
    'form.date' (val) {
      this.dateFormatted = val !== '' ? this.$formatApiDateToFront(val) : ''
    }
  },
  mounted () {
    this.$list({ urlDispatch: 'Crime/listCountries' })
    this.$list({ urlDispatch: 'Criminal/list' })
    this.$list({ urlDispatch: 'Victim/list' })
    this.$list({ urlDispatch: 'Weapon/list' })
  },

  methods: {
    ...mapActions('Criminal', ['create']),
    openModal () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
      this.$refs.form.reset()
    },
    openModalListCriminals () {
      this.$refs.modalListCriminals.openModal()
    },
    addCriminal (form) {
      console.log(form)
      this.create({ ...form })
    },
    prepareParams (form, criminalsForm) {
      return {
        country: form.country,
        crime_date: form.date,
        criminal_list: criminalsForm.length === 0 ? [] : criminalsForm.map((crime) => {
          return { criminal_id: crime.criminal.id_criminal, id_crime_type: crime.typeOfCrime }
        }),
        weapon_list: form.weaponsList.length === 0 ? [] : form.weaponsList.map((weapon) => {
          return { weapon_id: weapon }
        }),
        victim_list: form.victimsList.length === 0 ? [] : form.victimsList.map((victim) => {
          return { victim_id: victim }
        })
      }
    },
    save (form, criminalsForm) {
      if (this.$refs.form.validate()) {
        const params = this.prepareParams(form, criminalsForm)
        this.$createOrUpdate({
          urlDispatch: 'Crime/create',
          params,
          messages: 'Crime successfully registered',
          callback: () => {
            this.$list({ urlDispatch: 'Crime/list' })
            this.closeModal()
            this.clearForm()
          }
        })
      }
    },
    clearForm () {
      this.form = {
        country: '',
        typeOfCrime: '',
        date: '',
        criminal: '',
        weaponsList: [],
        victimsList: []
      }
    }
  }
}
</script>

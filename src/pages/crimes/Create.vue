<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card class="main-color">
        <v-toolbar dark class="default-color">
          <v-toolbar-title><span class="font-30">New Crime</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    required
                    :rules="typeOfCrimeRules"
                    outlined
                    dense
                    label="Types of Crime*"
                    clearable
                    :items="crimeTypes"
                    item-text="tx_type"
                    item-value="id_crime_type"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field required :rules="dateRules" outlined dense label="Date*" clearable></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field required :rules="criminalRules" outlined dense label="Criminal*" clearable></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    required
                    :rules="weaponRules"
                    outlined
                    dense
                    label="Weapon (optional)"
                    clearable
                    :items="weapons"
                    item-text="tx_weapon_type"
                    item-value="id_weapon"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-btn class="v-picker--full-width btn-default-custom">
                    <v-icon left dark>
                      mdi-plus
                    </v-icon>
                    Add Criminal
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn class="v-picker--full-width btn-default-custom">
                    <v-icon left dark>
                      mdi-plus
                    </v-icon>
                    New Weapon
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn class="v-picker--full-width btn-default-custom">
                    <span>0</span>
                    Criminals
                  </v-btn>
                </v-col>
                <v-col md="6">
                  <v-text-field outlined dense label="Victim (optional)" clearable></v-text-field>
                </v-col>
                <v-col cols="6"> </v-col>
                <v-col cols="12" md="6">
                  <v-btn class="v-picker--full-width btn-default-custom">
                    <v-icon left dark>
                      mdi-plus
                    </v-icon>
                    Add Victim
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn class="v-picker--full-width btn-default-custom">
                    <span>0</span>
                    Victims
                  </v-btn>
                </v-col>
              </v-row>
              <small>*indicates required field</small>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn :disabled="!valid" @click="send()">
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
import { mapState } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    typeOfCrimeRules: [v => !!v || 'Type of Crime is required'],
    dateRules: [v => !!v || 'Date is required'],
    criminalRules: [v => !!v || 'Criminal is required'],
    weaponRules: [v => !!v || 'Weapon is required'],
    valid: true
  }),
  computed: {
    ...mapState('Crime', ['crimeTypes']),
    ...mapState('Weapon', ['weapons'])
  },
  mounted () {
    this.$list({ urlDispatch: 'Weapon/list' })
    this.$list({ urlDispatch: 'Crime/listCrimeTypes' })
  },

  methods: {
    openModal () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
    },
    send () {
      this.$refs.form.validate()
    }
  }
}
</script>

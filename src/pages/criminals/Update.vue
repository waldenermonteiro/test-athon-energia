<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card class="main--background">
        <v-toolbar dark class="default--background">
          <v-toolbar-title><span class="font--24">Update Crime</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="form.typeOfCrime"
                    required
                    :rules="typeOfCrimeRules"
                    outlined
                    dense
                    label="Types of Crime*"
                    clearable
                    :items="typesOfCrime"
                    item-text="tx_type"
                    item-value="id_crime_type"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="form.criminal"
                    required
                    :rules="criminalRules"
                    outlined
                    dense
                    label="Criminal*"
                    clearable
                    :items="criminals"
                    item-text="tx_name"
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn @click="save({ form, index })" class="default--background">
            <v-icon left dark>
              mdi-plus
            </v-icon>
            Save a update crime
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data: vm => ({
    dialog: false,
    valid: true,
    typeOfCrimeRules: [v => !!v || 'Type of Crime is required'],
    criminalRules: [v => !!v || 'Criminal is required'],
    form: {
      typeOfCrime: '',
      criminal: ''
    },
    index: 0
  }),
  computed: {
    ...mapState('Crime', ['typesOfCrime']),
    ...mapState('Criminal', ['criminals', 'criminalsForm'])
  },
  mounted () {
    this.$list({ urlDispatch: 'Criminal/list' })
    this.$list({ urlDispatch: 'Weapon/list' })
  },

  methods: {
    ...mapActions('Criminal', ['create', 'update']),
    openModal (index) {
      this.dialog = true
      this.index = index
      this.setObjectInForm(index)
    },
    closeModal () {
      this.dialog = false
    },
    setObjectInForm (index) {
      const criminalsFormFiltered = this.criminalsForm.filter((item, indexFilter) => indexFilter === index)[0]
      this.form = { typeOfCrime: criminalsFormFiltered.typeOfCrime, criminal: criminalsFormFiltered.criminal }
    },
    save ({ form, index }) {
      if (this.$refs.form.validate()) {
        this.update({ form, index })
        this.closeModal()
      }
    }
  }
}
</script>

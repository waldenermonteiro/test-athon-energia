<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-card class="main--background ">
        <v-toolbar dark class="default--background">
          <v-toolbar-title><span class="font--24">Crime</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <ListItem class="elevation-0" :typeOfCrime="crime.criminal_crime_types" :dateOfTheCrime="crime.crime_date" :country="crime.country">
          <h2 class="only-desktop font--24 mt-5">Criminal</h2>
          <v-row v-if="crime.criminal_crime_types.length === 0">
            <v-col cols="12" sm="6" md="6">
              <ListItemWithImage :onlyOne="true" secondTitle="No criminal" subtitle="Weapon" :emptyItems="`NO <br />CRIMINAL`" />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col cols="12" sm="6" md="6" v-for="(crimeItem, index) in crime.criminal_crime_types" :key="index">
              <ListItemWithImage
                :firstTitle="crime.criminal_crime_types[0].criminal"
                :secondTitle="crime.weapons_crime[0].weapon"
                :subtitle="`${crime.weapons_crime[0].weapon_type} Weapon`"
              />
            </v-col>
          </v-row>
          <h2 class="only-desktop font--24">Victim</h2>
          <v-row v-if="crime.victims_crime.length === 0">
            <v-col cols="12" sm="6" md="6">
              <ListItemWithImage :onlyOne="true" secondTitle="No victim" subtitle="Victim" :emptyItems="`NO <br />VICTIM`" />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col cols="12" sm="6" md="6" v-for="(victim, index) in crime.victims_crime" :key="index">
              <ListItemWithImage :onlyOne="true" :secondTitle="victim.victim" subtitle="Victim" />
            </v-col>
          </v-row>
          <template slot="delete">
            <v-icon class="btn__delete float-right" color="#2699fb" @click="deleteCrime()">
              mdi-delete
            </v-icon>
          </template>
        </ListItem>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import ListItem from './ListItem'
import ListItemWithImage from './ListItemWithImage'
export default {
  props: {
    crime: {
      required: true
    }
  },
  components: {
    ListItem,
    ListItemWithImage
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    openModal () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
    },
    deleteCrime () {
      this.$emit('delete-crime')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>

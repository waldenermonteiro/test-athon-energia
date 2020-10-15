<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-card class="main-color">
        <v-toolbar dark class="default-color">
          <v-toolbar-title><span class="font-24">Crime</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <ListItem class="elevation-0">
          <h2 class="font-24 mt-5">Criminal</h2>
          <ListItemWithImage />
          <h2 class="font-24">Victim</h2>
          <ListItemWithImage :onlyOne="true" />
        </ListItem>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="error">
            <v-icon left dark>
              mdi-delete
            </v-icon>
            Delete Crime
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import ListItem from './ListItem'
import ListItemWithImage from './ListItemWithImage'
import { mapState } from 'vuex'
export default {
  components: {
    ListItem,
    ListItemWithImage
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    ...mapState('Weapon', ['weapons'])
  },
  mounted () {
    this.$list({ urlDispatch: 'Weapon/list' })
    this.$list({ urlDispatch: 'Crime/listTypesOfCrime' })
  },

  methods: {
    openModal () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
    }
  }
}
</script>

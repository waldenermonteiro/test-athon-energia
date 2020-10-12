<template>
  <v-container>
    <v-row class="">
      <v-col class="d-flex justify-start">
        <div class="text-uppercase font-30">Crime List</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn @click="openModalCreate()" class="default-color">
          <v-icon left dark>
            mdi-plus
          </v-icon>
          add a new crime
        </v-btn>
      </v-col>
    </v-row>
    <CFilter></CFilter>
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="3" v-for="n in 8" :key="n">
        <ListItem>
          <div class="mb-5">
            <v-icon class="float-right" color="#2699fb" @click="openModalListItemDetails()">
              mdi-magnify-plus-outline
            </v-icon>
            <v-icon class="test float-right" color="#2699fb" @click="clickDeleteIcon()">
              mdi-delete
            </v-icon>
          </div>
        </ListItem>
      </v-col>
    </v-row>
    <CCreate ref="modalCreate"> </CCreate>
    <ListItemDetails ref="modalListItemDetails"></ListItemDetails>
  </v-container>
</template>
<script>
import CCreate from './Create'
import CFilter from './components/Filter'
import ListItem from './components/ListItem'
import ListItemDetails from './components/ListItemDetails'
export default {
  components: {
    CCreate,
    CFilter,
    ListItem,
    ListItemDetails
  },
  data () {
    return {
      firstName: ''
    }
  },
  methods: {
    openModalCreate () {
      this.$refs.modalCreate.openModal()
    },
    openModalListItemDetails () {
      this.$refs.modalListItemDetails.openModal()
    }
  }
}
</script>

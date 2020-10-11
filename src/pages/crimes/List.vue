<template>
  <v-container>
    <v-row class="">
      <v-col class="d-flex justify-start">
        <div class="text-uppercase font-30">Crime List</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn @click="openModalCreate()" class="default-color cinzel-font">
          <v-icon left dark>
            mdi-plus
          </v-icon>
          add a new crime
        </v-btn>
      </v-col>
    </v-row>
    <CFilter> </CFilter>
    <CCreate ref="modalCreate"> </CCreate>
  </v-container>
</template>
<script>
import CCreate from './Create'
import CFilter from './components/Filter'
export default {
  components: {
    CCreate,
    CFilter
  },
  data () {
    return {
      firstName: ''
    }
  },
  methods: {
    openModalCreate () {
      this.$refs.modalCreate.openModal()
    }
  }
}
</script>

<template>
  <v-container>
    <v-row class="">
      <v-col class="d-flex justify-start">
        <div class="text-uppercase font-30">Crime List</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn class="default-color">
          <v-icon left dark>
            mdi-plus
          </v-icon>
          add a new crime
        </v-btn>
      </v-col>
    </v-row>
    <CFilter> </CFilter>
  </v-container>
</template>
<script>
import CFilter from './components/Filter'
export default {
  components: {
    CFilter
  },
  data () {
    return {
      firstName: ''
    }
  }
}
</script>

<template>
  <div class="list--scroll">
    <v-row class="mt-1" no-gutters v-for="(item, index) in criminalsForm" :key="index">
      <v-col class="d-flex justify-start">
        <span class="mr-1">{{ index + 1 }} -</span>
        {{ item.criminal.tx_name || "No Criminal" }}
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn x-small class="mr-2" color="success" @click="update(index)">
          <v-icon dark color="white" small>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn x-small color="error" @click="remove(index)">
          <v-icon dark color="white" small>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <UpdateCriminal ref="modalUpdateCriminal" />
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import UpdateCriminal from '../criminals/Update'
import masks from '../../mixins/masks'
export default {
  components: {
    UpdateCriminal
  },
  mixins: [masks],
  data: vm => ({
    dialog: false
  }),
  computed: {
    ...mapState('Criminal', ['criminals', 'criminalsForm'])
  },
  methods: {
    ...mapActions('Criminal', ['create', 'remove']),
    openModal () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
    },
    update (index) {
      this.$refs.modalUpdateCriminal.openModal(index)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>

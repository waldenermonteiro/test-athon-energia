<template>
  <v-container>
    <v-row class="">
      <v-col class="d-flex justify-start">
        <div class="font-30">Crime List</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn @click="openModalCreate()" class="default--background">
          <v-icon left dark>
            mdi-plus
          </v-icon>
          add new crime
        </v-btn>
      </v-col>
    </v-row>
    <CFilter></CFilter>
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="3" v-for="crime in crimes" :key="crime.id_crime">
        <ListItem :typeOfCrime="crime.criminal_crime_types" :dateOfTheCrime="crime.crime_date" :country="crime.country">
          <div class="mb-5">
            <v-icon class="float-right" color="#2699fb" @click="openModalListItemDetails(crime.id_crime)">
              mdi-magnify-plus-outline
            </v-icon>
            <v-icon class="btn__delete float-right" color="#2699fb" @click="deleteCrime(crime.id_crime)">
              mdi-delete
            </v-icon>
          </div>
        </ListItem>
        <ListItemDetails
          :ref="`modalListItemDetails${crime.id_crime}`"
          :crime="crime"
          @delete-crime="deleteCrime(crime.id_crime)"
        ></ListItemDetails>
      </v-col>
    </v-row>
    <CCreate ref="modalCreate"> </CCreate>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import notify from '../../mixins/notify-message.mixin'
import CCreate from './Create'
import CFilter from './components/Filter'
import ListItem from './components/ListItem'
import ListItemDetails from './components/ListItemDetails'
export default {
  mixins: [notify],
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
  computed: {
    ...mapState('Crime', ['crimes'])
  },
  mounted () {
    this.$list({ urlDispatch: 'Crime/list' })
  },
  methods: {
    openModalCreate () {
      this.$refs.modalCreate.openModal()
    },
    openModalListItemDetails (id) {
      this.$refs[`modalListItemDetails${id}`][0].openModal()
    },
    deleteCrime (id) {
      this.$setDialogQuestion({
        title: 'Are you sure you want to remove this crime?',
        message: 'This action is irreversible',
        callback: () => {
          this.$remove({
            urlDispatch: 'Crime/remove',
            params: { crime_id: id },
            callback: () => {
              this.$list({
                urlDispatch: 'Crime/list',
                callback: () => {
                  this.$setNotifySuccess('Crime deleted with success')
                }
              })
            }
          })
        }
      })
    }
  }
}
</script>

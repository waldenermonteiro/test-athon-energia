<template>
  <v-row no-gutters>
    <v-col cols="6" sm="4" lg="4" class="d-flex align-center">
      <v-avatar v-if="emptyItems" class="card__avatar white d-flex align-center"><p class="black--text font-weight-black pt-3 " v-html="emptyItems"></p> </v-avatar>
      <v-avatar v-else class="card__avatar"> <img alt="user" :src="`https://randomuser.me/api/portraits/med/${randomSex}/${randomId}.jpg`" /> </v-avatar
      ></v-col>
    <v-col cols="6" sm="8" lg="8" class="d-flex align-center col--height">
      <v-card class="main--background elevation-0">
        <v-card-title v-if="!onlyOne" class="card__title--nobold mb-0 pb-3">
          {{ firstTitle }}
          <v-icon v-if="!emptyItems" small class="ml-1" color="grey" @click="copyText(firstTitle)">
            mdi-content-copy
          </v-icon>
        </v-card-title>
        <v-card-subtitle v-if="!onlyOne" class="card__subtitle pb-0">Criminal</v-card-subtitle>
        <v-card-title class="card__title--nobold pt-2 pb-3">
          {{ secondTitle }}
          <v-icon v-if="!emptyItems" small class="ml-1" color="grey" @click="copyText(secondTitle)">
            mdi-content-copy
          </v-icon>
        </v-card-title>
        <v-card-subtitle class="card__subtitle">{{ subtitle }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    onlyOne: {
      required: false,
      default: false
    },
    firstTitle: {
      required: false
    },
    secondTitle: {
      required: true
    },
    subtitle: {
      required: true
    },
    emptyItems: {
      required: false
    }
  },
  data () {
    return {
      randomId: 0,
      randomSex: ''
    }
  },
  mounted () {
    this.randomId = Math.floor(Math.random() * 10)
    this.randomSex = this.randomId % 2 === 0 ? 'women' : 'men'
  },
  methods: {
    copyText (text) {
      navigator.clipboard.writeText(text).then(
        function () {
          console.log('Async: Copying to clipboard was successful!')
        },
        function (err) {
          console.error('Async: Could not copy text: ', err)
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>

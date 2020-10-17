<template>
  <v-row no-gutters>
    <v-col cols="12" sm="3" lg="4" class="d-flex align-center">
      <v-avatar v-if="emptyItems" class="width-image white d-flex align-center "
      ><p class="black--text font-weight-black pt-3 " v-html="emptyItems">
      </p>
      </v-avatar>
      <v-avatar v-else class="width-image"> <img alt="user" :src="`https://randomuser.me/api/portraits/med/${randomSex}/${randomId}.jpg`" /> </v-avatar
      ></v-col>
    <v-col cols="12" sm="9" lg="8" class="d-flex align-center height-col">
      <v-card class="main-color elevation-0">
        <v-card-title v-if="!onlyOne" class="item-details-title-no-bold mb-0 pb-3"> {{ firstTitle }} </v-card-title>
        <v-card-subtitle v-if="!onlyOne" class="item-details-subtitle pb-1">Criminal</v-card-subtitle>
        <v-card-title class="item-details-title-no-bold pt-0 pb-3"> {{ secondTitle }} </v-card-title>
        <v-card-subtitle class="item-details-subtitle">{{ subtitle }}</v-card-subtitle>
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
  }
}
</script>
<style scoped>
@media (min-width: 600px) and (max-width: 800px) {
  .width-image {
    height: 59px;
    min-width: 59px;
    width: 59px;
  }
}
@media (min-width: 801px) and (max-width: 1264px) {
  .width-image {
    height: 80px !important;
    min-width: 80px !important;
    width: 80px !important;
  }
}
@media (min-width: 1264px) {
  .width-image {
    height: 100px !important;
    min-width: 100px !important;
    width: 100px !important;
  }
}
.height-col {
  height: 115.2px !important;
}
</style>

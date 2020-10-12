<template>
  <v-row>
    <v-col cols="12" sm="6" md="6" v-for="n in 2" :key="n">
      <v-row no-gutters>
        <v-col cols="12" sm="3" lg="3" class="d-flex align-center">
          <v-avatar class="width-image"> <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg" /> </v-avatar
          ></v-col>
        <v-col cols="12" sm="9" lg="9">
          <v-card class="main-color elevation-0">
            <v-card-title class="pt-1 pb-3"> Voldemort </v-card-title>
            <v-card-subtitle class="pb-1">Criminal</v-card-subtitle>
            <v-card-title v-if="!onlyOne" class="pt-1 pb-3"> Dark Magic Wand </v-card-title>
            <v-card-subtitle v-if="!onlyOne" class="">Ranged Weapon</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    onlyOne: {
      required: false,
      default: false
    }
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
@media (min-width: 768px) {
  .width-image {
    height: 80px !important;
    min-width: 80px !important;
    width: 80px !important;
  }
}
</style>

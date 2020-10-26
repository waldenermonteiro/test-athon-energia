<template>
  <v-card class="main--background">
    <v-card-title class="card__title pb-4">
      <div class="flex justify-start">{{ verifyTypeOfCrimes(typeOfCrime) }} </div>
      <div class="flex justify-end">
        <slot name="delete"> </slot>
      </div>
    </v-card-title>
    <v-card-subtitle class="card__subtitle pb-2">Crime Type</v-card-subtitle>
    <v-card-text>
      <p class="card__text mb-0">{{ $formatApiDateTimeToFront(dateOfTheCrime) }}</p>
      <p class="card__subtitle mb-1">{{ country }}</p>
      <slot> </slot>
    </v-card-text>
  </v-card>
</template>
<script>
import masks from '../../../mixins/masks'
export default {
  mixins: [masks],
  props: {
    typeOfCrime: {
      required: true
    },
    dateOfTheCrime: {
      required: true
    },
    country: {
      required: true
    }
  },
  methods: {
    verifyTypeOfCrimes (typesOfCrimes) {
      return typesOfCrimes.length !== 0 ? typesOfCrimes[0].crime_type : 'Sem Informação'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>

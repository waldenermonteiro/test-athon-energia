/* eslint-disable no-useless-catch */
import CrimeService from '../services/CrimeService'

export const list = async ({ commit }, params) => {
  try {
    const { data } = await CrimeService.list(params)
    commit('SET_DATA', data)
  } catch (error) {
    await error
  }
}
export const listTypesOfCrime = async ({ commit }, params) => {
  try {
    const { data } = await CrimeService.listTypesOfCrime(params)
    commit('SET_DATA_CRIME_TYPES', data)
  } catch (error) {
    await error
  }
}
export const create = async ({ commit }, obj) => {
  try {
    await CrimeService.create(obj)
  } catch (error) {
    throw error
  }
}
export const update = async ({ commit }, obj) => {
  try {
    await CrimeService.updateNoId(obj)
  } catch (error) {
    throw error
  }
}
export const remove = async ({ commit }, obj) => {
  try {
    await CrimeService.remove(obj.id)
  } catch (error) {
    throw error
  }
}

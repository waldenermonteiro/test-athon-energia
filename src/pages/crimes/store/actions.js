/* eslint-disable no-useless-catch */
import CrimeService from '../services/CrimeService'

export const list = async ({ commit }, params) => {
  try {
    const { data } = await CrimeService.list(params)
    commit('SET_DATA', data)
  } catch (error) {
    throw error
  }
}
export const listTypesOfCrime = async ({ commit }, params) => {
  try {
    const { data } = await CrimeService.listTypesOfCrime(params)
    commit('SET_DATA_CRIME_TYPES', data)
  } catch (error) {
    throw error
  }
}
export const listCountries = async ({ commit }, params) => {
  try {
    const { data } = await CrimeService.listCountries(params)
    commit('SET_COUNTRIES', data)
  } catch (error) {
    await error
  }
}
export const create = async ({ commit, dispatch }, obj) => {
  try {
    await CrimeService.create(obj)
    commit('Criminal/CLEAR_CRIMINAL_LIST', null, { root: true })
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
    await CrimeService.removeNoId(obj)
  } catch (error) {
    throw error
  }
}

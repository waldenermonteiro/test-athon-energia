/* eslint-disable no-useless-catch */
import WeaponService from '../services/WeaponService'

export const list = async ({ commit }, params) => {
  try {
    const { data } = await WeaponService.list(params)
    commit('SET_DATA', data)
  } catch (error) {
    await error
  }
}
export const create = async ({ commit }, obj) => {
  try {
    await WeaponService.create(obj)
  } catch (error) {
    throw error
  }
}
export const update = async ({ commit }, obj) => {
  try {
    await WeaponService.updateNoId(obj)
  } catch (error) {
    throw error
  }
}
export const remove = async ({ commit }, obj) => {
  try {
    await WeaponService.remove(obj.id)
  } catch (error) {
    throw error
  }
}

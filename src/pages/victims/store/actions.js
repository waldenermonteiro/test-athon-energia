/* eslint-disable no-useless-catch */
import VictimService from '../services/VictimService'

export const list = async ({ commit }, params) => {
  try {
    const { data } = await VictimService.list(params)
    commit('SET_DATA', data)
  } catch (error) {
    await error
  }
}
export const create = async ({ commit }, obj) => {
  try {
    await VictimService.create(obj)
  } catch (error) {
    throw error
  }
}
export const update = async ({ commit }, obj) => {
  try {
    await VictimService.updateNoId(obj)
  } catch (error) {
    throw error
  }
}
export const remove = async ({ commit }, obj) => {
  try {
    await VictimService.remove(obj.id)
  } catch (error) {
    throw error
  }
}

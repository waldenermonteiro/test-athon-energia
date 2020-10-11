
/* eslint-disable no-useless-catch */
import CriminalService from '../services/CriminalService'

export const list = async ({ commit }, params) => {
  try {
    console.log('test')
    const { data } = await CriminalService.list(params)
    commit('SET_DATA', data)
  } catch (error) {
    await error
  }
}
export const create = async ({ commit }, obj) => {
  try {
    await CriminalService.create(obj)
  } catch (error) {
    throw error
  }
}
export const update = async ({ commit }, obj) => {
  try {
    await CriminalService.updateNoId(obj)
  } catch (error) {
    throw error
  }
}
export const remove = async ({ commit }, obj) => {
  try {
    await CriminalService.remove(obj.id)
  } catch (error) {
    throw error
  }
}

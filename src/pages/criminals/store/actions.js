
import CriminalService from '../services/CriminalService'

export const list = async ({ commit }, params) => {
  try {
    const { data } = await CriminalService.list(params)
    commit('SET_DATA', data)
  } catch (error) {
    await error
  }
}
export const create = async ({ commit }, obj) => {
  commit('SET_CRIMINAL_IN_LIST', obj)
}
export const update = async ({ commit }, { form, index }) => {
  commit('UPDATE', { form, index })
}
export const remove = async ({ commit }, index) => {
  commit('REMOVE', index)
}

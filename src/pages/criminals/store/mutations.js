
export const SET_DATA = (state, payload) => {
  state.criminals = [...payload]
}
export const SET_CRIMINAL_IN_LIST = (state, payload) => {
  state.criminalsForm = [...state.criminalsForm, payload]
}
export const CLEAR_CRIMINAL_LIST = (state) => {
  state.criminalsForm = []
}
export const UPDATE = (state, { form, index }) => {
  state.criminalsForm = state.criminalsForm.map((item, indexMap) => (indexMap === index ? {
    ...item,
    typeOfCrime: form.typeOfCrime,
    criminal: form.criminal
  } : item))
}
export const REMOVE = (state, index) => {
  state.criminalsForm = [...state.criminalsForm.filter((item, indexFilter) => indexFilter !== index)]
}

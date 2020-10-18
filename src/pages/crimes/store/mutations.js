function firstUppercase (text) {
  var words = text.toLowerCase().split(' ')
  for (var a = 0; a < words.length; a++) {
    var w = words[a]
    words[a] = w[0].toUpperCase() + w.slice(1)
    return words.join(' ')
  }
}
export const SET_DATA = (state, payload) => {
  state.crimes = payload.crimes
}
export const SET_COUNTRIES = (state, payload) => {
  state.countries = payload
}

export const SET_DATA_CRIME_TYPES = (state, payload) => {
  payload.crime_types.map((type) => {
    type.tx_type = firstUppercase(type.tx_type)
    return type
  })
  state.typesOfCrime = payload.crime_types
}

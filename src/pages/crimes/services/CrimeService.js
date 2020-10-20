import base from '../../../services/base'

class CrimeService extends base {
  constructor () {
    super('/crime')
  }

  list = async ($params = '') => {
    try {
      const { data } = await this.service.get('/crimes', { params: $params })
      return data
    } catch (error) {
      throw this.statusResponse(error, 'list')
    }
  };

  listTypesOfCrime = async ($params = '') => {
    try {
      const { data } = await this.service.get('crime_types', { params: $params })
      return data
    } catch (error) {
      throw this.statusResponse(error, 'list')
    }
  };

  listCountries = async () => {
    try {
      const data = await this.service.get('https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all')
      return data
    } catch (error) {
      throw this.statusResponse(error, 'list')
    }
  }
}
export default new CrimeService()

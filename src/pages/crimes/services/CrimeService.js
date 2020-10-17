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
}
export default new CrimeService()

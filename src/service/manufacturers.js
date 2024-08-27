import axios from 'axios'

export default class ManufacturerService {
  async getManufacturer() {
    const response = await axios.get('/manufacturers/')
    return response.data.results
  }

  async createManuFacturer(manufacturer) {
    const response = await axios.post('/manufacturers/', manufacturer)
    return response.data
  }

  async deleteManufacturers(manufacturer_id) {
    await axios.delete(`/manufacturers/${manufacturer_id}`)
  }
}
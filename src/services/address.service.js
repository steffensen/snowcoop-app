import Axios from 'axios'

const AddressService = {
  getAddressList() {
    return Axios.get('http://localhost:3000/address').then(async response => {
      if (response.status === 200 || response.status === 201) {
        const {
          payload
        } = response.data
        const addresses = payload.map(address => {
          address.lat = Number(address.lat)
          address.lng = Number(address.lng)
          return address
        })
        return addresses
      }
    })
  },
  addAdress(payload) {
    return Axios.post('http://localhost:3000/address', payload).then(
      async response => {
        if (response.status === 200 || response.status === 201) {
          const {
            payload
          } = response.data
          payload.lat = Number(payload.lat)
          payload.lng = Number(payload.lng)
          return payload
        }
      }
    )
  }
}

export default AddressService
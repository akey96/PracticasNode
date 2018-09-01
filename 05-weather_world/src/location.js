const axios = require('axios')

const location = async (adress) => {
  let encodeUrl = encodeURI(adress)

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)

  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`erro no se encontro la ciudad ${adress}`)
  }
  return {
    adress: resp.data.results[0].formatted_address,
    lat: resp.data.results[0].geometry.location.lat,
    lng: resp.data.results[0].geometry.location.lng
  }
}

module.exports = {
  location
}

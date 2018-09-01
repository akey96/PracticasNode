const axios = require('axios')

const weather = async (lat, lng) => {
  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b4f40e87863723f4113d1ffb292b2018`)

  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`error no existen las lat=${lat}, lng=${lng}`)
  }
  return resp.data.main.temp
}

module.exports = {
  weather
}

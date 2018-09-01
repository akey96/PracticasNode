const {argv} = require('./config/yargs')
const {location} = require('./src/location')
const {weather} = require('./src/weather')

const getInfo = async (adress) => {
  try {
    let coord = await location(adress)
    let temp = await weather(coord.lat, coord.lng)
    return `El clima de la ciudad ${coord.adress} es de ${temp} grados`
  } catch (e) {
    return `No se puede encontrar la ciudad ${adress}`
  }
}
getInfo(argv.direction)
  .then(message => console.log(message))

  .catch(err => console.log(err))

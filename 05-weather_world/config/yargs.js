const argv = require('yargs')
  .options({
    direction: {
      alias: 'd',
      desc: 'Direccion para obtener el clima de una ciudad',
      demand: true
    }
  })
  .argv

module.exports = {
  argv
}


const opts = {
  base: {
    demand: true,
    alias: 'b',
    default: 10
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('listar', 'imprime en consola la tabla del multiplicar', opts)
  .command('crear', 'crea la tabla de multiplicar en un archivo', opts)
  .help()
  .argv

module.exports = {
  argv
}

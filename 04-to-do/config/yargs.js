const description = {
  demand: true,
  alias: 'd',
  desc: 'descricion de lo que hace el comando'
}
const complete = {
  alias: 'c',
  default: true,
  desc: 'descricion de lo que hace el comando'
}

const argv = require('yargs')
  .command('create', 'crea un elemento por hacer', {
    description
  })
  .command('delete', 'elimina un elemento por hacer', {
    description
  })
  .command('update', 'actualiza un estado completado de una tarea', {
    description,
    complete
  })
  .help()
  .argv

module.exports = {
  argv

}

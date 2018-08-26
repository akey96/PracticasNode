
const colors = require('colors/safe')
const {argv} = require('./config/yargs')
const {createMultiplication, listarTabla} = require('./multiplicar/multiplicacion')

let commando = argv._[0]
switch (commando) {
  case 'listar' :
    listarTabla(argv.base, argv.limite)
    break
  case 'crear' :
    createMultiplication(argv.base, argv.limite)
      .then((archivo) => console.log(`se creo el archivo ${colors.green(archivo)}`))
      .catch((err) => console.log(err))
    break
  default :
    console.log('comando no valido'.err)
}

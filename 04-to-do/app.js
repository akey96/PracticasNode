const {argv} = require('./config/yargs')
const color = require('colors')
const {create, getListToDo, update, deleteT} = require('./por-hacer/por-hacer')

let command = argv._[0]

switch (command) {
  case 'list' :
    let listTask = getListToDo()
    for (let task of listTask) {
      console.log('=====por hacer======'.green)
      console.log(task.description)
      console.log(`estado : ${task.complete}`)
      console.log('====================='.green)
    }
    break
  case 'create' :
    create(argv.description)
    break
  case 'update' :
    update(argv.description, argv.complete)
    break
  case 'delete' :
    deleteT(argv.description)
    break
  default :
    console.log('comando no reconocido')
}

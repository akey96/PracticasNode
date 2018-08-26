const fs = require('fs')

let listToDo = []

const saveDB = () => {
  let data = JSON.stringify(listToDo)
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('no se pudo grabar')
    console.log('se grabo la data en la base de datos(JSON)')
  })
}

const loadDB = () => {
  try {
    listToDo = require('../db/data.json')
  } catch (err) {
    listToDo = []
  }
}

const create = (description) => {
  loadDB()
  let toDo = {
    description,
    complete: false
  }
  listToDo.push(toDo)
  saveDB()
}

const getListToDo = () => {
  loadDB()
  return listToDo
}

const update = (description, complete = true) => {
  loadDB()
  let indexTask = listToDo.findIndex(task => task.description === description)
  if (indexTask >= 0) {
    listToDo[indexTask].complete = Boolean(complete)
    saveDB()
    return true
  } else {
    return false
  }
}

const deleteT = (description) => {
  loadDB()
  let newListToDo = listToDo.filter(task => task.description !== description)
  if (newListToDo.length === listToDo.length) {
    return false
  } else {
    listToDo = newListToDo
    saveDB()
    return true
  }
}

module.exports = {
  create,
  getListToDo,
  update,
  deleteT
}


const fs = require('fs')
const colors = require('colors/safe')
const listarTabla = (base, limite = 10) => {
  console.log('============'.green)
  console.log(`tabla del ${base}`.green)
  console.log('============'.green)

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`)
  }
}

const createMultiplication = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(new Error(`el argumento ${base} no es un numero`))
      return undefined
    }

    let cad = ''
    for (let i = 1; i <= limite; i++) {
      cad += `${base} * ${i} = ${base * i}\n`
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, cad, (err) => {
      if (err) {
        reject(err)
        return undefined
      } else {
        resolve(`tabla-${base}.txt`)
        return undefined
      }
    })
  })
}

// export {createMultiplication}
module.exports = {
  createMultiplication,
  listarTabla
}

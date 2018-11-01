import mysql = require('mysql')

export default class MySQL {
  
  private static _instance: MySQL
  cnn: mysql.Connection;
  private connected: Boolean = false

  constructor () {
    console.log('Clase Inicalizadad')
    this.cnn = mysql.createConnection({
      host: 'localhost',
      user: 'pepito',
      password: 'pepito1234',
      database: 'pruebas'
    })
    
    this.conectDB()
  }

  private conectDB () {
    this.cnn.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message)
      }

      this.connected = true
      console.log('conexion correcta')
    })
  }
 
  
  public static get instance () {
    return this._instance || (this._instance = new this())
  }

  static executeQuery (query: string, callbakc: Function) {
    this.instance.cnn.query(query, (err, results: Object[], fields) => {
      if (err) {
        console.log('Error en query')
        console.log(err)
        return callbakc(err)
      }

      if (results.length === 0) {
        callbakc('El registro solicitado no existe')
      } else {
        callbakc(null, results)
      }
    })
  }


}
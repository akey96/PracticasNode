import express = require('express')
import path = require('path')

export default class Server {

  public app: express.Application
  public port: number

  constructor (port: number) {
    this.port = port
    this.app = express()
  }

  static init (port: number) {
    return new Server(port)
  }

  private publicFolder () {
    this.app.use(express.static( path.resolve(__dirname, '../public' )))
  }

  start (callback: Function) {
    this.publicFolder()
    this.app.listen(this.port, callback)
    
  }
}
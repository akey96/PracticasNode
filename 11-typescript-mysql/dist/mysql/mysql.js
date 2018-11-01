"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.connected = false;
        console.log('Clase Inicalizadad');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'pepito',
            password: 'pepito1234',
            database: 'pruebas'
        });
        this.conectDB();
    }
    conectDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
            }
            this.connected = true;
            console.log('conexion correcta');
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static executeQuery(query, callbakc) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callbakc(err);
            }
            if (results.length === 0) {
                callbakc('El registro solicitado no existe');
            }
            else {
                callbakc(null, results);
            }
        });
    }
}
exports.default = MySQL;

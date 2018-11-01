"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    static init(port) {
        return new Server(port);
    }
    publicFolder() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }
    start(callback) {
        this.publicFolder();
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;

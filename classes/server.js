"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const environment_1 = require("../global/environment");
// clase por default
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
        // instancio el servidor
        this.httpServer = new http_1.default.Server(this.app);
        // configurar io
        this.io = new socket_io_1.default.Server(this.httpServer, {
            cors: {
                origin: true,
                credentials: true,
            }
        });
        this.escucharConexiones();
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    escucharConexiones() {
        console.log('escuchando conexiones');
        // iniciar las conexiones de sockets 
        this.io.on('connection', (cliente) => {
            console.log('clientes conectados');
        });
    }
    // levantar el servidor
    start(callback) {
        this.httpServer.listen(this.port, callback());
    }
}
exports.default = Server;

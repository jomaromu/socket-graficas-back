"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectarCliente = void 0;
// conectar cliente
exports.conectarCliente = (cliente, io) => {
    cliente.on('connect', () => {
        console.log('cliente conectado!!!');
    });
};

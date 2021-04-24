"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grafica_1 = require("../classes/grafica");
const server_1 = __importDefault(require("../classes/server"));
const router = express_1.Router();
const grafica = new grafica_1.GraficaData();
router.get('/grafica', (req, res) => {
    res.json(grafica.getDataGrafica());
});
router.post('/grafica', (req, res) => {
    const mes = req.body.mes;
    const unidades = Number(req.body.unidades);
    grafica.incrementarValor(mes, unidades);
    const server = server_1.default.instance;
    server.io.emit('cambio-grafica', grafica.getDataGrafica());
    res.json(grafica.getDataGrafica());
});
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const principal_1 = __importDefault(require("./routes/principal"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// crear instancia del servidor
const server = server_1.default.instance;
// body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
// usar las rutas 
server.app.use('/', principal_1.default);
// iniciar el servidor
server.start(() => {
    console.log(`Servidor corriendo en el puerto: ${server.port}`);
});

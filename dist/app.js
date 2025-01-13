"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const db_1 = __importDefault(require("./config/db"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(errorHandler_1.errorHandler);
app.use('/api', jobRoutes_1.default);
db_1.default.sync({ force: false }).then(() => {
    console.log("This is working !!");
});
exports.default = app;

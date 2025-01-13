"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true, // Enforces SSL
            rejectUnauthorized: false, // Allows self-signed certificates
        },
    },
    logging: false,
});
exports.default = sequelize;
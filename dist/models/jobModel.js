"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Job extends sequelize_1.Model {
}
Job.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    company: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    location: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    salary: { type: sequelize_1.DataTypes.FLOAT, allowNull: true },
    description: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
}, {
    sequelize: db_1.default,
    tableName: 'jobs',
    timestamps: true,
});
exports.default = Job;

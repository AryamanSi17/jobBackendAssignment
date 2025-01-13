"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobById = exports.getJobs = exports.createJob = void 0;
const jobModel_1 = __importDefault(require("../models/jobModel"));
const createJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield jobModel_1.default.create(req.body);
        res.status(201).json(job);
    }
    catch (error) {
        next(error);
    }
});
exports.createJob = createJob;
const getJobs = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield jobModel_1.default.findAll();
        res.status(200).json(jobs);
    }
    catch (error) {
        next(error);
    }
});
exports.getJobs = getJobs;
const getJobById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield jobModel_1.default.findByPk(req.params.id);
        if (!job)
            return res.status(404).json({ error: 'Job not found' });
        res.status(200).json(job);
    }
    catch (error) {
        next(error);
    }
});
exports.getJobById = getJobById;
const updateJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield jobModel_1.default.findByPk(req.params.id);
        if (!job)
            return res.status(404).json({ error: 'Job not found' });
        yield job.update(req.body);
        res.status(200).json(job);
    }
    catch (error) {
        next(error);
    }
});
exports.updateJob = updateJob;
const deleteJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield jobModel_1.default.findByPk(req.params.id);
        if (!job)
            return res.status(404).json({ error: 'Job not found' });
        yield job.destroy();
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
});
exports.deleteJob = deleteJob;

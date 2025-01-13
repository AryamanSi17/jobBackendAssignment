"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobController_1 = require("../controllers/jobController");
const router = express_1.default.Router();
router.post('/jobs', (req, res, next) => (0, jobController_1.createJob)(req, res, next));
router.get('/jobs', (req, res, next) => (0, jobController_1.getJobs)(req, res, next));
router.get('/jobs/:id', (req, res, next) => (0, jobController_1.getJobById)(req, res, next));
router.put('/jobs/:id', (req, res, next) => (0, jobController_1.updateJob)(req, res, next));
router.delete('/jobs/:id', (req, res, next) => (0, jobController_1.deleteJob)(req, res, next));
exports.default = router;

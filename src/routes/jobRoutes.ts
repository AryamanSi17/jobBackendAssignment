import express from 'express';
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from '../controllers/jobController';

const router = express.Router();

router.post('/jobs', (req, res, next) => createJob(req, res, next));
router.get('/jobs', (req, res, next) => getJobs(req, res, next));
router.get('/jobs/:id', (req, res, next) => getJobById(req, res, next));
router.put('/jobs/:id', (req, res, next) => updateJob(req, res, next));
router.delete('/jobs/:id', (req, res, next) => deleteJob(req, res, next));


export default router;

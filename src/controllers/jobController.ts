import { Request, Response ,NextFunction} from 'express';
import Job from '../models/jobModel';

export const createJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const job = await Job.create(req.body);
      res.status(201).json(job);
    } catch (error) {
      next(error);
    }
  };
export const getJobs = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    next(error);  }
};

export const updateJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    await job.update(req.body);
    res.status(200).json(job);
  } catch (error) {
    next(error);  }
};

export const deleteJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    await job.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);  }
};

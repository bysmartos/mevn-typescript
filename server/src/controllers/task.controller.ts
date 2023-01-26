import Task from "../models/task.model";
import { Response, Request } from "express";


const taskController = {
    postTask: async (req: Request, res: Response) => {
        try {
            const { title, description } = req.body;
            const newTask = new Task({ title, description });
            const savedTask = await newTask.save();
            res.json(savedTask);

        } catch (err: any) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getAllTasks: async (req: Request, res: Response) => {
        try {
            const tasks = await Task.find();
            res.json(tasks);

        } catch (err: any) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getOneTask: async (req: Request, res: Response) => {
        try {
            const tasks = await Task.findById(req.params.id);
  res.json(tasks);

        } catch (err: any) {
            return res.status(500).json({ msg: err.message });
        }
    },
    editTask: async (req: Request, res: Response) => {
        try {
            const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
              });
              res.json(updatedTask);

        } catch (err: any) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteTask: async (req: Request, res: Response) => {
        try {
            const tasks = await Task.findByIdAndDelete(req.params.id);
  res.json(tasks);

        } catch (err: any) {
            return res.status(500).json({ msg: err.message });
        }
    }


};

export default taskController;

import { Router } from "express";
import taskController from "../controllers/task.controller";

const router = Router();

router.get("/tasks", taskController.getAllTasks);

router.post("/tasks", taskController.postTask);

router.get("/tasks/:id",taskController.getOneTask);

router.put("/tasks/:id", taskController.editTask);

router.delete("/tasks/:id", taskController.deleteTask);

export default router;
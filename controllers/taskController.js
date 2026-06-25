import Task from "../models/taskModel.js";

export const createTask = async (req, res, next) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) { next(err); }
};

export const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (err) { next(err); }
};

export const updateTask = async (req, res, next) => {
    try {
        const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (err) { next(err); }
};

export const deleteTask = async (req, res, next) => {
    try {
        const deleted = await Task.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({message:  "Task not found"})
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) { next(err); }
};
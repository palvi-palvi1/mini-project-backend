let tasks = [];
let nextId = 1;

exports.createTask = (req, res) => {
    const newTask = { id: nextId++, ...req.body, status: 'Pending'};
    tasks.push(newTask);
    res.status(201).json(newTask);
};


exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

exports.updateTasks = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === id);
    if (!task) {
        return res.status(404).json({message: 'No task with this id'});
    }

    Object.assign(task, req.body);
    res.status(200).json(task);
};


exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({message: 'No task with this id'});
    }

    tasks.splice(index, 1);
    res.status(200).json({message: 'Task deleted successfully'});
};
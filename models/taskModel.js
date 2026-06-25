import mongoose, {model} from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date, required: true},
    priority: {type: String, enum: ['Low', 'Medium', 'High']},
});
const Task = model('Task', taskSchema);

export default Task;
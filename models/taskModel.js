import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date, required: true},
    priority: {type: String, enum: ['Low', 'Medium', 'High']},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}


})

export default mongoose.model('Task', taskSchema);
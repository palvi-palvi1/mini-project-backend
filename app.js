import express from "express";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";


const app = express();
app.use(express.json());
app.use(cors())

app.use('/task', taskRoutes);
app.use('/author', userRoutes);

export default app;
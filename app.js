import express from "express";
import authorRoutes from "./routes/authorRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

app.use('/task', taskRoutes);
app.use('/author', authorRoutes);

export default app;
import express from "express";
import authorRoutes from "./routes/authorRoutes.js";
import taskRoutes from "./routes/taskRoutes";

const app = express();
app.use(express.json());

app.use('/task', taskRoutes);
app.use('/author', authorRoutes);

export default app;
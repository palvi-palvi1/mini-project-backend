import app from './app.js';
import connectDB from './config/db.js';


connectDB();
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is running on port 3000');});
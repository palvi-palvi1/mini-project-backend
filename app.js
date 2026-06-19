const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'This is backend',
        timestamp: new Date().toISOString()
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
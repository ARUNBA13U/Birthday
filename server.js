const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9', 'step10'];
steps.forEach(step => {
    app.get(`/${step}`, (req, res) => {
        res.sendFile(path.join(__dirname, 'public', `${step}.html`));
    });
});

app.get('/win', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'win.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const calculateSellingPrice = require('./modules/conversion/converter');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('WELCOME TO THE END OF YOUR LOSSES');
    res.end();
});

app.post('/', async (req, res) => {
    const exchangeData = {
        from: req.body.from,
        to: req.body.to,
    };
    calculateSellingPrice({ costPrice: 10000, data: exchangeData });
    res.send('YEAH');
    res.end();
});

app.listen(3000, () => {
    console.log('server listening at port 3000...')
})
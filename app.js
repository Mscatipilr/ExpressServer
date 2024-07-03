const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//create instance of express
const app = express();
//integrate middleware
app.use(morgan('dev')); //logger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => { //Morgan will send status code so I clipped .status(200) out
    res.send(`<link href='https://fonts.googleapis.com/css?family=Monofett' rel='stylesheet'>
        <style>
        body {
            font-family: 'Monofett';font-size: 60px;
            text-align: center;
        }
        </style> <body>Welcome to the Express Server!</body>`);
});

app.get('/about', (req, res) => {
    res.send(`<link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel='stylesheet'>
        <style>
        body {
            font-family: "Ubuntu Mono", monospace; font-size: 22px;
            text-align: center;
        }
        </style> <body>This server is a part of my CTAC assignment to demonstrate setting up a server using the express framework.</body>`);
})

app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
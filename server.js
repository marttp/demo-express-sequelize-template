require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const { serverConfig } = require('./configs');
const { port } = serverConfig;


app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create route controller service
app.use('/api/v1', require('./routes/api.router'));

app.listen(port, () => {
    console.log('====================================');
    console.log(`Server listening on port: ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log('====================================');
});

module.exports = app;
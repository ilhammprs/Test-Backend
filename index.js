const express = require('express');
require('dotenv').config();

const cors = require('cors');

const http = require('http')

const router = require('./src/routes');

const app = express();

const server = http.createServer(app)

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/v1/', router);

server.listen(port, () => console.log(`Server aktif diport ${port}!`))
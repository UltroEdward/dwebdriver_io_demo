const express = require('express');
const PORT = 3000
const REPORT_FOLDER = /allure-report

const server = express();
server.use(express.static(__dirname + REPORT_FOLDER));
server.listen(PORT);

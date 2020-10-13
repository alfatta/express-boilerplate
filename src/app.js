const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');

const package = require('../package.json');
const routes = require('./routes');

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(routes);

app.listen(port, () => {
  console.log(`${package.name} started on port ${port}`);
})

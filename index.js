const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const isStringInteger = require('./utils/isStringInteger');
const getMultiplesCode = require('./domain/multiples').getMultiplesCode;

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/get/:input', (req, res) => {
  const { input } = req.params;

  if (isStringInteger(input)) {
    res.json({
      response: getMultiplesCode(parseInt(input)),
    });
    return;
  }
  res.status(400).send('Input should be an integer');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

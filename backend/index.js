const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.post('/register', (req, res, next) => {
    console.log(req.body, 'req.body');
    console.log('POST evo me');
    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
    })
    res.status(404).json({
      status: 'fail',
      message: 'User not created',
    })
});

module.exports = app;

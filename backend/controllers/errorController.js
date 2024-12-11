module.exports = (err, req, res, next) => {
   console.log(err, 'error');
    console.log('Ja sam global error handler');
    res.send('Ja sam global error handler');
};

const express = require('express');
const cors = require('cors');
const app = express();

// Models
const Users = require('./models/userModel.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// * Register

app.post('/register', async (req, res, next) => {
    try {
        const user = await Users.findOne({ email: req.body.email });
        //   console.log(user, 'user');
        if (!user) {
            const newUser = new Users(req.body);
            // console.log(newUser);

            try {
                const saveNewUser = await newUser.save();
                //  console.log(saveNewUser, 'saveNewUser');
                return res.status(200).json({
                    status: 'success',
                    message: 'Korisnik uspjesno spremljen',
                });
            } catch (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Nije uspelo spremanje korisnika',
                });
            }
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Korisnik vec postoji',
            });
        }
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

// * Login
app.post('/login', async (req, res, next) => {
    try {
        const user = await Users.findOne({ email: req.body.email });

        console.log(user, 'user-post');

        if (user) {
            if (user.password !== req.body.password) {
                return res.status(200).json({
                    status: 'success',
                    message: 'Uspjesno prijavljivanje',
                });
            } else {
                return res.status(400).json({
                    status: 'error',
                    message: 'Netacni podaci',
                });
            }
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Korisnik ne postoji',
            });
        }
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

// * All other pages including 404
app.all('*', (req, res, next) => {
    next('22');
    res.status(404).json({
        status: 'fail',
        message: `Ova stranica ${req.originalUrl} ne postoji`,
    });
});

app.use((err, req, res, next) => {
    console.log(err, 'error');
    console.log('Ja sam global error handler');
    res.send('Ja sam global error handler');
});

module.exports = app;

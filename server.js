const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
        connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        host : process.env.DATABASE_HOST,
        port: 5432,
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PW,
        database : process.env.DATABASE_DB
    }
});

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => { res.send('it is working!') })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

// Render backend live URL: 
// https://smartbrainbackend-371k.onrender.com

// PSQL Command: PGPASSWORD=EhvieZAPy7XTc7b6Q13kyjLdhCZOv3xG psql -h dpg-chogoevdvk4goeo0pheg-a.oregon-postgres.render.com -U smartbraindb_k5ws_user smartbraindb_k5ws

// Password:
// EhvieZAPy7XTc7b6Q13kyjLdhCZOv3xG

// Internal Database URL:
// postgres://smartbraindb_k5ws_user:EhvieZAPy7XTc7b6Q13kyjLdhCZOv3xG@dpg-chogoevdvk4goeo0pheg-a/smartbraindb_k5ws

// External Database URL:
// postgres://smartbraindb_k5ws_user:EhvieZAPy7XTc7b6Q13kyjLdhCZOv3xG@dpg-chogoevdvk4goeo0pheg-a.oregon-postgres.render.com/smartbraindb_k5ws
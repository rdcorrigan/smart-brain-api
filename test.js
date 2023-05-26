const app = require('http').createServer((req, res) => res.send('hey Im running'));

// Environment variable convention is to capitalize variable
const DATABASE_URL = process.env.DATABASE_URL;

console.log(3000);

app.listen(3000, () => {
    console.log(`Server is listening on port ${DATABASE_URL}`);
});

// PORT=3050 node test.js
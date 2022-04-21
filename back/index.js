require('dotenv').config();
const http = require('http');
const app = require('./app');

const port= process.env.PORT ?? 3000;

const serveur=http.createServer(app);

serveur.listen(port,()=> {
    console.log(`http://localhost:${port}`)
});

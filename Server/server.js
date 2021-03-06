require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const server = express();
server.use(cors());
server.use(express.json());
server.use(cookieParser());

//const port = 3000;
const port = process.env.PORT || 3000;

const habitRoutes = require('./routes/habits');
const auth = require('./auth/index');

server.use('/habits', habitRoutes);
server.use('/auth', auth);

// Root route
server.get('/', (req, res) => res.send('Hello world!'));
//Test comment


//server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`));

// if (port == null || port == "") {
//   port = 3000;
// }
server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`));

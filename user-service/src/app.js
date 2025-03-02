const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

module.exports = app;



/*const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Definir rutas
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

*/
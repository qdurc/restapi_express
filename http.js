require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para recibir JSON en las solicitudes

const connectDB = require('./db');
connectDB();

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API con Express.js!');
});

// Configurar puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

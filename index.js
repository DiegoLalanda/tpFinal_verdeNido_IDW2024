const express = require('express');
const app = express();
const morgan = require('morgan');
const { join, dirname } = require('path'); 
const fileUrlToPath = require('url');
const PORT = 3000;

//middlewares
app.use(morgan('dev'));

// Rutas
app.get('/',(req,res)=>{
  res.sendFile(join(__dirname,'src/public/index.html'));
});

// Nueva ruta para la sección "Acerca de"
app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'src/public/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(join(__dirname, 'src/public/contact.html'));
});

app.get('/edit', (req,res) => {
  res.sendFile(join(__dirname,'src/public/edit.html'));
});

app.use(express.static(join(__dirname, 'src/public')));

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
});
//un cambio
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
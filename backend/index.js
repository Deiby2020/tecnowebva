import express from 'express';
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req,res) => res.send('Bienvenido a mi api de graphql'));
app.listen( port, () => console.log('El servidor esta trabjando en el pureto: ${port} '));
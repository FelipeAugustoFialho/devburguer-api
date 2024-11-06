import 'dotenv/config'; // Carrega variáveis de ambiente antes de qualquer outra coisa
import app from './app'
// src/server.js

import express from 'express';
// outras importações...


app.listen(3001,() => console.log('Server is running at port 3001...'));
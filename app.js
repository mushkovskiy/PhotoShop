require('@babel/register');

const express = require('express');
const configApp = require('./config/configApp');

const app = express();
configApp(app);
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => console.log('Веб-сервер слушает порт', PORT));

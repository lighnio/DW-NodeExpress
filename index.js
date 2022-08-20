import express from 'express'
import morgan from 'morgan'
import {dirname, join} from 'path'
import { PORT } from './src/config.js';
import router from './src/routes/index.js';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', join(__dirname, '/src/views/pages'))

app.use(router);

app.listen(PORT);
console.log("SERVER ON PORT: ", PORT);
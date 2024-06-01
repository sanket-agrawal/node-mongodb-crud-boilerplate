import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port || 4001;

const server = app.listen(PORT,() => {
    console.log('App Running at 4000');
})
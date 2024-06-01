import 'dotenv/config.js';

export const config = {
    port : process.env.PORT,
    mongoUri : process.env.MONGO_URI

}
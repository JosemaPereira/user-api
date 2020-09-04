import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { handleError, logError } from './middlewares';
import { connectDB, defaultConfig } from './providers';
import { mainRoute, usersRoute } from './routes';

const app = express();
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mainRoute(app);
usersRoute(app);

app.use(logError);
app.use(handleError);
app.listen(defaultConfig.port, () =>
  console.log(`App listen at http://localhost:${defaultConfig.port}`)
);

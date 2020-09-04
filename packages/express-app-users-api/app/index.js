import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import {
  handleError,
  logError,
  configurations,
  openDataBase,
} from './middlewares';
import { defaultConfig } from './providers';
import { mainRoute, usersRoute } from './routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(configurations);
app.use(openDataBase);
mainRoute(app);
usersRoute(app);

app.use(logError);
app.use(handleError);
app.listen(defaultConfig.port, () =>
  console.log(`App listen at http://localhost:${defaultConfig.port}`)
);

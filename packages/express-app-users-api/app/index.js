import { defaultConfig, connectDB } from './providers';
import express from 'express';
import { mainRoute, usersRoute } from './routes';
import { logError, handleError } from './middlewares';
import cors from 'cors';
import bodyParser from 'body-parser';

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

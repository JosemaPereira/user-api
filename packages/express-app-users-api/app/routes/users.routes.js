import express from 'express';
import { UsersController } from '../controllers/users.controller';

export const usersRoute = (app) => {
  const router = express.Router();
  app.use('/users', router);
  router.get('/', UsersController.getAll);
};

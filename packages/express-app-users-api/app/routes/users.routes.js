import express from 'express';
import { UsersController } from '../controllers/users.controller';

export const usersRoute = (app) => {
  const router = express.Router();
  app.use('/users', router);

  //List all users
  router.get('/', UsersController.getAll);

  //Create new user
  router.post('/', UsersController.create);
};

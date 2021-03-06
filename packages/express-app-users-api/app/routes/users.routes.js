import express from 'express';
import { UsersController } from '../controllers/users.controller';

export const usersRoute = (app) => {
  const router = express.Router();
  app.use('/users', router);

  //List all users
  router.get('/', UsersController.getAll);

  //List by id
  router.get('/:id', UsersController.getById);

  //Create new user
  router.post('/', UsersController.create);

  //Edit User
  router.put('/:id', UsersController.update);

  //Delete user
  router.delete('/:id', UsersController.delete);
};

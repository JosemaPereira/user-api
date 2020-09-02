import { UserServices } from '../services';
import { usersRoute } from '../routes/users.routes';

export const UsersController = {
  getAll: async (req, res, next) => {
    try {
      const users = await UserServices.getAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const users = await UserServices.create(req.body);
      res.status(201).json(users);
    } catch (err) {
      next(err);
    }
  },
};

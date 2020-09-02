import { UserServices } from '../services';

export const UsersController = {
  getAll: async (req, res, next) => {
    try {
      const users = await UserServices.getAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
};

import { UserServices } from '../services';

export const UsersController = {
  getAll: async (req, res, next) => {
    try {
      const users = await UserServices.getAll();
      req.dataBase.connection.close()
      if (users.length) {
        res.status(200).json(users);
      } else {
        res.status(404).json({});
      }
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
    try {
      const ids = req.params.id.split(',').map(Number);
      const users = await UserServices.getById(ids, req.config.users.api);
      req.dataBase.connection.close()
      if (users.length) {
        res.status(200).json(users);
      } else {
        res.status(404).json({});
      }
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const reponse = await UserServices.create(req.body);
      req.dataBase.connection.close()
      if (reponse.user) {
        res.status(201).json(reponse.user);
      } else {
        res.status(304).json({});
      }
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const reponse = await UserServices.update(req.params.id, req.body);
      req.dataBase.connection.close()
      if (reponse.user) {
        res.status(200).json(reponse.user);
      } else {
        res.status(304).json({});
      }
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const reponse = await UserServices.delete(req.params.id);
      req.dataBase.connection.close()
      if (reponse.user) {
        res.status(200).json(reponse.user);
      } else {
        res.status(304).json({});
      }
    } catch (err) {
      next(err);
    }
  },
};

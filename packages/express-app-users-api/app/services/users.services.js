import { UserModel } from '../models';

export const UserServices = {
  getAll: async () => UserModel.find() || [],
};

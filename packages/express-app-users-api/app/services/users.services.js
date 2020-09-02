import { UserModel } from '../models';

export const UserServices = {
  getAll: async () => UserModel.find() || [],
  create: async (user) => {
    return new Promise(async (resolve, reject) => {
      try {
        await UserModel.create({ ...user });
        resolve({ message: 'User created' });
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
  update: async (id, newInfo) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.findOneAndUpdate({ Id: id }, newInfo, {
          new: true,
        });
        console.log(user)
        resolve({ message: 'User Update' });
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
};

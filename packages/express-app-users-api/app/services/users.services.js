import { UserModel } from '../models';
import { DefaultExternalUsersService } from '@josema-pereira/external-users';

export const UserServices = {
  getAll: async () => UserModel.find() || [],
  getById: async (ids, apiUrl) => {
    return new Promise(async (resolve, reject) => {
      try {
        const missingIds = [];
        let users = await UserModel.find({ Id: { $in: ids } });
        if (users.length !== ids.length) {
          const service = new DefaultExternalUsersService(apiUrl);
          ids.forEach((id) => {
            if (!users.find((user) => user.Id === id)) {
              missingIds.push(id);
            }
          });
          const missingUsers = await service.getUsers(missingIds);
          users = users.concat(missingUsers);
        }
        resolve(users);
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
  create: async (user) => {
    return new Promise(async (resolve, reject) => {
      try {
        let existUser = await UserModel.findOne({ Id: user.Id });
        if (existUser) {
          resolve({ user: null, message: 'User not created. Duplicate Id' });
        } else {
          const newUser = await UserModel.create({ ...user });
          resolve({ user: newUser });
        }
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
  update: async (id, newInfo) => {
    return new Promise(async (resolve, reject) => {
      try {
        let existUser = await UserModel.findOne({ Id: id });
        if (existUser) {
          const user = await UserModel.findOneAndUpdate({ Id: id }, newInfo, {
            new: true,
          });
          resolve({ user });
        } else {
          resolve({ user: null, message: 'UserId not found' });
        }
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
  delete: async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        let existUser = await UserModel.findOne({ Id: id });
        if (existUser) {
          const user = await UserModel.findOneAndDelete({ Id: id });
          resolve({ user });
        } else {
          resolve({ user: null, message: 'UserId not found' });
        }
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
};

import { UserModel } from '../models';
import { DefaultExternalUsersService } from '@josema-pereira/external-users';
import { defaultConfig } from '../providers';

export const UserServices = {
  getAll: async () => UserModel.find() || [],
  getById: async (ids) => {
    return new Promise(async (resolve, reject) => {
      try {
        const missingIds = [];
        let users = await UserModel.find({ Id: { $in: ids } });
        if (users.length !== ids.length) {
          const {
            users: { api },
          } = defaultConfig;
          const service = new DefaultExternalUsersService(api);
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
        resolve({ message: 'User Update' });
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
  delete: async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.findOneAndDelete({ Id: id });
        resolve({ message: 'User Deleted' });
      } catch (ex) {
        reject({ message: ex });
      }
    });
  },
};

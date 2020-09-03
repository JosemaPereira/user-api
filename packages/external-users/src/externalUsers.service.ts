import { User, UserRaw } from './models';
import axios from 'axios';

export class DefaultExternalUsersService {
  constructor(private apiUrl) {}

  getUsers(usersId: number[]): Promise<User[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const usersInfo = [] as User[];
        await Promise.all(
          usersId.map(async (id) => {
            try {
              const { data: response } = await axios.get<UserRaw>(
                `${this.apiUrl}/${id}`
              );
              if (response && response.ad && response.data) {
                const { data, ad } = response;
                usersInfo.push({
                  Id: data.id,
                  email: data.email,
                  first_name: data.first_name,
                  last_name: data.last_name,
                  company: ad.company,
                  url: ad.url,
                  text: ad.text,
                });
              }
            } catch (ex) {}
          })
        );
        resolve(usersInfo.sort((a, b) => a.Id - b.Id));
      } catch (ex) {
        reject(ex);
      }
    });
  }
}

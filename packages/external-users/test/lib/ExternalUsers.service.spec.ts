import { DefaultExternalUsersService } from '../../src';
import { OneUserMock, TwoUserMock } from '../mocks/user';

describe('ExternalUsers', () => {
  const api = 'https://reqres.in/api/users';
  it('Should be created', () => {
    const externalUsers = new DefaultExternalUsersService(api);
    expect(externalUsers).toBeTruthy();
  });

  it('Should get one user', async () => {
    const externalUsers = new DefaultExternalUsersService(api);
    const user = await externalUsers.getUsers([1]);
    expect(user).toEqual(OneUserMock);
  });

  it('Should get two user', async () => {
    const externalUsers = new DefaultExternalUsersService(api);
    const user = await externalUsers.getUsers([1, 2]);
    expect(user).toEqual(TwoUserMock);
  });

  it('Should get two user and avoid non-existent userId', async () => {
    const externalUsers = new DefaultExternalUsersService(api);
    const user = await externalUsers.getUsers([1, 2, 9999]);
    expect(user).toEqual(TwoUserMock);
  });

  it('Should no get user with non-existent userId ', async () => {
    const externalUsers = new DefaultExternalUsersService(api);
    const user = await externalUsers.getUsers([9999]);
    expect(user).toEqual([]);
  });

  it('Should no get user with empty array ', async () => {
    const externalUsers = new DefaultExternalUsersService(api);
    const user = await externalUsers.getUsers([]);
    expect(user).toEqual([]);
  });
});

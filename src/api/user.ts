import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUsers = () => {
  return client.get<User[]>(`/users`);
};

export const addUser = (data: Omit<User, 'id'>) => {
  return client.post<User>(`/users`, data);
};

export const deleteUser = (todoId: number) => {
  return client.delete(`/users/${todoId}`);
};

export const patchUser = (data: User) => {
  return client.patch<User>(`/users/${data.id}`, data);
};

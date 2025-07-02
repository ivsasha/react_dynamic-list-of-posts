import { Post } from '../types/Post';
import { client } from '../utils/fetchClient';

export const getPosts = (userId: number) => {
  return client.get<Post[]>(`/posts?userId=${userId}`);
};

export const addPost = (data: Omit<Post, 'id'>) => {
  return client.post<Post>(`/posts`, data);
};

export const deletePost = (todoId: number) => {
  return client.delete(`/posts/${todoId}`);
};

export const patchPost = (data: Post) => {
  return client.patch<Post>(`/posts/${data.id}`, data);
};

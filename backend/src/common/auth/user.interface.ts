export interface IUser {
  id: string;
  email: string;
  created_at: number;
  updated_at: number;
}
export interface IUserRecord extends IUser {
  token?: string;
}
export interface IAutheUser extends IUser {
  token: string;
  access: string;
}

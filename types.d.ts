export interface IUser {
  id: number;
  email: string;
  password: string;
  createdOn: Date;
  authenticated: boolean;
}

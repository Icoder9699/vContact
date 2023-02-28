export interface IContactData {
  id: number | null,
  fio: string;
  phone: string;
  email: string;
  groups: IGroup[];
}

export interface IGroup {
  title: string,
  id: number
}

export interface IUserData {
  email: string;
  password: string;
}
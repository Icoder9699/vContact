export interface IContactData {
  fio: string;
  phone: string;
  email: string;
  groups: IGroup[];
}

export interface IGroup {
  title: string,
  id: string | number
}
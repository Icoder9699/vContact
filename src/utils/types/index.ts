export interface IContactData {
  id: string | number,
  fio: string;
  phone: string;
  email: string;
  groups: IGroup[];
}

export interface IGroup {
  title: string,
  id: string | number
}
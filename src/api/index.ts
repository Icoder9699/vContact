import { IContactData } from "@/utils/types/index";
import api from "@/plugins/axios";

export const fetchContacts = () => {
  return api.get("/contacts");
};

export const fetchContactById = (id: any) => {
  return api.get(`/contacts/${id}`);
};

export const editContactById = (id: any, data: IContactData) => {
  return api.patch(`/contacts/${id}`, data);
};

export const addContact = (data: IContactData) => {
  return api.post(`/contacts`, data);
};

export const searchContact = (value: string) => {
  return api.get(`/contacts?q=${value}`);
};

export const filterByGroupId = (groupId: any) => {
  return api.get(`/contacts?contact.groups=${groupId}`)
}

export const ContactApi = {
  fetchContacts,
  fetchContactById,
  editContactById,
  addContact,
  searchContact,
  filterByGroupId
};

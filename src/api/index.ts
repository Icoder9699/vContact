import api from "@/plugins/axios"

export const fetchContacts = () => {
  return api.get('/contacts')
}
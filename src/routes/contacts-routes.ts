import ContactsListPage from '@/views/pages/contacts/ContactsListPage.vue'
import ContactsEditPage from '@/views/pages/contacts/ContactsEditPage.vue'
import ContactsAddPage from '@/views/pages/contacts/ContactsAddPage.vue'

const contactsRoutes = [
   {
      path: "/contacts",
      component: ContactsListPage,
   },
   {
      path: "/contacts/add",
      component: ContactsAddPage,
   },
   {
      path: "/contacts/edit/:id",
      component: ContactsEditPage,
   },
]

export default contactsRoutes
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import Contact from "../../components/Contacts/Contacts";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

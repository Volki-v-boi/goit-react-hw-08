import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <span>
        {name}: {phone}
      </span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;

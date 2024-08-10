import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <Field
              type="text"
              name="name"
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
            />
          </div>
          <div>
            <Field
              type="text"
              name="phone"
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              placeholder="Phone"
            />
            <ErrorMessage
              name="phone"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "10px 20px",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

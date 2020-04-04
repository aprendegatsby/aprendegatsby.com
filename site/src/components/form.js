/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field } from "formik";

function Label({ name }) {
  function getlabel(name) {
    switch (name) {
      case "email":
        return "correo electrónico:";
      case "first_name":
        return "Primer Nombre:";
      default:
        return name;
    }
  }

  return (
    <label
      htmlFor={name}
      sx={{
        color: "primary",
        fontSize: [2, 2],
        mb: 2,
        fontWeight: "body",
        fontFamily: "body",
        display: "inline-block",
      }}
    >
      {getlabel(name)}
    </label>
  );
}

function FieldWrapper(props) {
  return <div sx={{ width: "100%", position: "relative", mb: 3 }} {...props} />;
}

function ErrorMessage({ children }) {
  return (
    <div
      sx={{
        width: "100%",
        // px: 3,
        borderRadius: 1,
        // bg: '#f8d7da',
        // borderColor: '#f5c6cb',
        my: 1,
      }}
    >
      <Styled.p
        sx={{
          color: "darkred",
          fontSize: [0, 0],
          m: 0,
          p: 0,
          fontWeight: "bold",
        }}
      >
        {children}
      </Styled.p>
    </div>
  );
}

function InputField({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  console.log(props);
  return (
    <FieldWrapper>
      <Label name={field.name} />
      <input
        sx={{
          display: "block",
          fontSize: 3,
          width: "100%",
          py: 10,
          px: 3,
          border: "1px solid #9E9F9E",
          borderRadius: 3,
        }}
        type="text"
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
    </FieldWrapper>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  async function handleSubmit(values, { setSubmitting }) {
    setSubmitted(true);
    // fetch(`https://api.convertkit.com/v3/forms/1242653/subscribe`, {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(
    //     { ...values, api_key: "PFViSeCgq4EwZvgzgUmGtQ" },
    //     null,
    //     2
    //   ),
    // });
    try {
      await axios.post(`/api/subscribe`, values);
    } catch (err) {
      console.error("Error!!! => ", err);
    }

    setSubmitting(false);
  }
  return (
    <Formik
      initialValues={{
        email: "",
        first_name: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Campo Requerido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email invalido";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form sx={{ width: "100%" }}>
          {submitted ? (
            <div>
              <Styled.p
                sx={{
                  color: "#639",
                  px: 2,
                  fontSize: [2, 2],
                }}
              >
                Gracias por apuntarte!
              </Styled.p>
            </div>
          ) : (
            <div>
              <Field
                label="Primer Nombre"
                name="first_name"
                type="text"
                placeholder="Tu Primer Nombre"
                component={InputField}
              />
              <Field
                name="email"
                type="email"
                placeholder="apuntate@email.com"
                component={InputField}
              />
              <button
                sx={{
                  appearance: "none",
                  display: "inline-block",
                  textAlign: "center",
                  lineHeight: "inherit",
                  textDecoration: "none",
                  fontWeight: "bold",
                  m: 0,
                  px: 3,
                  py: 2,
                  border: 0,
                  borderRadius: 4,
                  bg: "#663399",
                  color: "white",
                  borderRadius: 4,
                  fontSize: 2,
                  flex: 1,
                  width: "100%",
                  p: 3,
                }}
                type="submit"
              >
                Submit
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

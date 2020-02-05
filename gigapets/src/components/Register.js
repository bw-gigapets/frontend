import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { Container, Content, Underlined, P } from './Login';
import * as Yup from 'yup';
import { Formik } from 'formik';


const RegisterForm = () => (

<Formik
initialValues={{ first_name: "", last_name:"", password: "" }}
onSubmit={(values, { setSubmitting }) => {
  setTimeout(() => {
    console.log("Logging in", values);
    setSubmitting(false);
  }, 500);
}}


validationSchema={Yup.object().shape({
  firstName: Yup.string()
    .required("Required"),
    lastName: Yup.string()
    .required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
})}
>
{props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  const size = ['large'];

  return (
      <Container>
          <Content>
          <h1>Gigapets Registration</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Field>
      <label htmlFor="first_name">First Name: </label>
      <input
        name="first_name"
        type="text"
        placeholder="Enter your first name"
        value={values.first_name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.first_name && touched.first_name && "error"}
      />
     
      {errors.first_name && touched.first_name && (
        <div className="input-feedback">{errors.first_name}</div>
      )}
      </Form.Field>

      <Form.Field>
      <label htmlFor="first_name">Last Name: </label>
      <input
        name="last_name"
        type="text"
        placeholder="Enter your last name"
        value={values.last_name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.last_name && touched.last_name && "error"}
      />
     
      {errors.last_name && touched.last_name && (
        <div className="input-feedback">{errors.last_name}</div>
      )}
      </Form.Field>

      <Form.Field>
      <label htmlFor="username">Choose A Username: </label>
      <input
        name="username"
        type="text"
        placeholder="Enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.username && touched.username && "error"}
      />
     
      {errors.username && touched.username && (
        <div className="input-feedback">{errors.username}</div>
      )}
      </Form.Field>
      <Form.Field>
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password && "error"}
      />
      
      {errors.password && touched.password && (
        <div className="input-feedback">{errors.password}</div>
      )}
      </Form.Field>
      <Button type="submit" disabled={isSubmitting}> Register</Button>
    </Form>

    <P>		
        <strong>Already Have A Gigapet?</strong>
         <Link to="/login"><Underlined> Login Here</Underlined></Link> 
	</P>
    </Content>
</Container>
  );
}}
</Formik>
);


export default RegisterForm;










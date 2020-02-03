import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { Container, Content, Underlined, P } from './Login';
import * as Yup from 'yup';
import { Formik } from 'formik';


const RegisterForm = () => (

<Formik
initialValues={{ email: "", password: "" }}
onSubmit={(values, { setSubmitting }) => {
  setTimeout(() => {
    console.log("Logging in", values);
    setSubmitting(false);
  }, 500);
}}


validationSchema={Yup.object().shape({
  email: Yup.string()
    .email()
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
      <label htmlFor="email">Email: </label>
      <input
        name="email"
        type="text"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email && "error"}
      />
     
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}
      </Form.Field>

      <Form.Field>
      <label htmlFor="username">Choose A Username: </label>
      <input
        name="email"
        type="text"
        placeholder="Enter your username"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email && "error"}
      />
     
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
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










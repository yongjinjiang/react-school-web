import React from 'react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style/ContactForm.scss'

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email Invalido!')
      .required('Es necesario un Email'),
    addressee: Yup.string('Ingresa el destinatario')
        .required('En necesario este campo'),
    name: Yup.string('Ingresa tu nombre')
        .required('En necesario este campo'),
    phone: Yup.string('Ingresa tu telefono')
        .required('En necesario este campo'),
    message: Yup.string('Ingresa tu telefono')
        .required('En necesario este campo'),
  });

class ContactForm extends React.Component {
  
    handleSubmit = (values, { 
      props = this.props, 
      setSubmitting 
    }) => {
       
      console.log(values);
      alert('Form Submitted');
      setSubmitting(false);
      return;
    }
    

    
    render() {
       
      return(
        <div className="contactForm">
            <Formik
                validationSchema={validationSchema} 
                onSubmit={this.handleSubmit}
                render={formProps => {
                    return(
                    <Form>
                        <Field 
                        type="text" 
                        name="addressee" 
                        placeholder="DESTINATARIO" 
                        /> 
                        <ErrorMessage className="error" name="addressee" />
                        
                        <Field 
                            type="text" 
                            name="name" 
                            placeholder="NOMBRE Y APELLIDO" 
                                /> 
                        <ErrorMessage name="name" />
                        <Field 
                            type="text" 
                            name="phone" 
                            placeholder="TELEFONO" 
                                /> 
                        <ErrorMessage name="phone" />
                        <Field 
                            type="text" 
                            name="message" 
                            placeholder="MENSAJE" 
                                /> 
                        <ErrorMessage name="message" />
                        <Field 
                            type="text" 
                            name="email" 
                            placeholder="DIRECCION" 
                                /> 
                        <ErrorMessage name="email" />
                                        
                        <button type="submit">
                            ENVIAR
                        </button>
                        </Form>
                    );
                }}
            />
        </div>
        );
     }
  }

export default ContactForm;
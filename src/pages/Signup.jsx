import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

import './Signup.scss'

export default function Signup() {


   const [activeForm,setActiveForm] = useState('signup')

   return (
      <div className='signup-page'>
         <section className="start">
            <div className="container">
               <div className="row">
                  {activeForm== 'signup' ?  <SignupForm setActiveForm ={ setActiveForm  } /> : <LoginForm    setActiveForm ={ setActiveForm  } /> }
               </div>
            </div>
         </section>
      </div>
   )
}

function SignupForm(props) {
   const SignupSchema = Yup.object().shape({
      firstName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
      lastName: Yup.string()
         .min(2, 'Too Short!').required('Required')
         .max(50, 'Too Long!'),
      email: Yup.string().email('Invalid email').required('Required'),
   });
   return (
      <Formik
         initialValues={{
            firstName: '',
            lastName: '',
            email: '',
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
            // same shape as initial values
            console.log(values);
         }}
      >
         {({ errors, touched }) => (
            <Form>
               <div className="input-group">
                  <h5> First Name </h5>
                  <Field name="firstName"  className= {touched.firstName  && errors.firstName  ?  'haserror' : '' }  />
                  {touched.firstName  && errors.firstName   && (
                     <span className='error'>{errors.firstName}</span>
                  )}
               </div>

               <div className="input-group">
                  <h5> Last Name </h5>
                  <Field name="lastName" className= {touched.lastName  && errors.lastName  ?  'haserror' : '' } />
                  {touched.lastName  && errors.lastName   && (
                     <span className='error'>{errors.lastName}</span>
                  )}
               </div>

               <div className="input-group">
               <h5> Email </h5>
                  <Field name="email" className= {touched.lastName  && errors.lastName  ?  'haserror' : '' }  />
                  {touched.email && errors.email   && (
                     <span className='error'>{errors.email }</span>
                  )}
               </div>
               <p className="ihave" onClick={ () => props.setActiveForm('login') } >I have an account</p>
               
               <button type="submit">Sign Up </button>
            </Form>
         )}
      </Formik>
   )
}


function LoginForm(props) {
   const LoginSchema = Yup.object().shape({
      firstName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
      lastName: Yup.string()
         .min(2, 'Too Short!').required('Required')
         .max(50, 'Too Long!'),
      email: Yup.string().email('Invalid email').required('Required'),
   });
   return (
      <Formik
         initialValues={{
            firstName: '',
            lastName: '',
            email: '',
         }}
         validationSchema={LoginSchema}
         onSubmit={values => {
            // same shape as initial values
            console.log(values);
         }}
      >
         {({ errors, touched }) => (
            <Form>
               <div className="input-group">
                  <h5> Email </h5>
                  <Field name="email"  className= {touched.email  && errors.email  ?  'haserror' : '' }  />
                  {touched.email  && errors.email   && (
                     <span className='error'>{errors.email}</span>
                  )}
               </div>

               <div className="input-group">
                  <h5> Password </h5>
                  <Field name="password" className= {touched.password  && errors.password  ?  'haserror' : '' } />
                  {touched.lastName  && errors.lastName   && (
                     <span className='error'>{errors.lastName}</span>
                  )}
               </div>
               <p className="ihave" onClick={() => props.setActiveForm('signup') } >I don't have an account</p>
               
               <button type="submit">Sign Up </button>
            </Form>
         )}
      </Formik>
   )
}
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ErrorComponent from './ErrorComponent';

class GeneralForm extends React.Component {
    constructor(){
     super()
     this.initialValues = {
        name : '', email: '', dob:'', height:''
    }
    this.validationSchema = Yup.object({
        name : Yup.string().min(5, 'Minimum of 5 Characters.').required('Name is required.'),
        email : Yup.string().email('Invalid Email Format.').required('Email is required.'),
        height : Yup.number('Must be a double.').required('Height is required'),
        dob: Yup.date('Invalid date format').required('Date of Birth is required.')
    })
    this.onSubmit =  this.onSubmit.bind(this)
    }
    
    onSubmit(values){
        console.log(values)
    }

    render(){
        return (
            <div className="container center">
                <div className="center">
                    <Formik
                        initialValues={this.initialValues}
                        validationSchema={ this.validationSchema }
                        onSubmit={this.onSubmit}
                    >
                        {
                            () => (
                                <Form>
                                    <div className="input-field">
                                        <label htmlFor="name">Name</label>
                                         <Field id="name" name="name" type="text"/>
                                         <ErrorMessage name="name" component = { ErrorComponent }/>
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" id="email" type="email"/>
                                        <ErrorMessage name="email" component={ ErrorComponent }/>
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="height">Height</label>
                                        <Field name="height" id="height" type="number"/>
                                        <ErrorMessage name="height" component={ ErrorComponent }/>
                                    </div>
                                    <div className="input-field">
                                        <label>Date of Birth</label>
                                        <Field name="dob" id="dob" type="date"/>
                                        <ErrorMessage name="dob" component={ ErrorComponent } />
                                    </div>
                                   <div>
                                       <button type="submit" className="btn btn-green">
                                           Save
                                       </button>
                                   </div>

                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}



export default GeneralForm;
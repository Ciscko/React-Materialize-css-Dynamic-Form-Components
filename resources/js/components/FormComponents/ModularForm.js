import React from 'react';
import FormControl from './Formbits/FormControl'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import M from 'materialize-css'

const ModularForm = () => {
    React.useEffect(() => {
        M.AutoInit()
    }, [])
    const validationSchema = Yup.object({
        name: Yup.string().min(6, 'Full name must be at least 6 characters.').required("Full Name is required."),
        height: Yup.number('Height must be a number').required('Height in cm is required.'),
        gender: Yup.string().required('Gender is required'),
        profession: Yup.string().required('Profession is required.'),
        dob: Yup.date('Invalid date format.').required('Date of Birth is required.'),
        comments: Yup.string().required('Comments are required.'),
        skills: Yup.array().required('At least one skill is required.')
    })
    const onSubmit = (values, submitMethodProps) => {
        console.log(values)
        setTimeout(() => {
            submitMethodProps.resetForm()
            submitMethodProps.setSubmitting(false)
        }, 2000)
    }
    const selectOptions = [
        { key: 'engineer', value: 'Engineer' }, { key: 'doctor', value: 'Doctor' }, { key: 'accountant', value: 'Accountant' }
    ]
    const initialValues = {
        name: '', height: '', gender: '', profession: selectOptions[0].key, dob: '', comments: ''
    }
    const radioOptions = [
        { key: 'male', value: 'Male' }, { key: 'female', value: 'Female' }, { key: 'other', value: 'Other' }
    ]
    const checkboxOptions = [
        { key: 'react', value: 'React.js ' }, { key: 'angular', value: 'Angular.js' }, { key: 'rpa', value: 'Robotic Process Automation' },
        { key: 'django', value: 'Django' }, { key: 'ruby', value: 'Ruby on Rails' }, { key: 'laravel', value: 'Laravel' }
    ]
    return (
        <div className="section">
            <div className="container">
                <div className="card"  style={{'padding': '5%'}}>
                    <div className="row">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        validateOnMount
                        onSubmit={onSubmit}
                    >
                        {
                            (formProps) => {
                                return (
                                    <Form>
                                        <div className="col l4 m4 s12">
                                            <FormControl type="text" name='name' label='Full Name' />
                                            <FormControl type="number" name='height' label='Height in Cm' />
                                            <FormControl type="radio" name="gender" label="Gender" options={radioOptions} />
                                            <FormControl type="select" name="profession" label="Profession" options={selectOptions} />
                                        </div>
                                        <div className="col l2 m2">   
                                        </div>
                                        <div className="col l6 m6 s12">
                                            <FormControl type="checkbox" name="skills" label="Skills" options={checkboxOptions} />
                                            <FormControl type="datepicker" name="dob" label="Date of Birth" />
                                            <FormControl type="textarea" name="comments" label="comments" />
                                            <div className="input-field">
                                                <button disabled={formProps.isSubmitting || !formProps.isValid} className="btn btn-green" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModularForm;
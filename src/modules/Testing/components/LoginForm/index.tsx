// Libraries
import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

// styles
import './styles.scss';

// components
import FormikControl from 'Components/FormikControl';

const LoginForm:React.FC = () => {
    const languageOptions = [
        {key: 'English', value: 'english'},
        {key: 'Chinese', value: 'chinese'},
        {key: 'Spanish', value: 'spanish'}
    ];
    const genderOptions = [
        {key:'Male', value: 'male'},
        {key:'Female', value: 'female'},
        {key:'Unknown', value: 'unknown'}
    ];
    const browserOptions = [
        {label: 'Chrome', value: 'chrome'},
        {label: 'Firefox', value: 'firefox'},
        {label: 'Egde', value: 'egde'}
    ];
    const initialValues = {
        username: '',
        password: '',
        comments: '',
        browser: '',
        gender: '',
        languages: ['english'],
        birthDate: null
    };

    const validationSchema = Yup.object({
        // username: Yup.string().required('Please enter you username'),
        // password: Yup.string().required('Please enter you password'),
        // comments: Yup.string().required('Please enter you comments')
    });

    const onSubmit = (values:any) => {
        console.log('onSubmit', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <FormikControl
                    control='input'
                    type="text"
                    label='Username'
                    name='username'
                    className='control'
                    required={true}
                    minLength='6'
                />
                <FormikControl
                    control='input'
                    type="text"
                />
                <FormikControl
                    control='input'
                    type="password"
                    label='Password'
                    name='password'
                    className='control'
                    required={true}
                    minLength='6'
                />
                <FormikControl 
                    control='textarea'
                    label='Comment'
                    name='comments'
                    className='textarea-control'
                    required={true}
                />
                <FormikControl 
                    control='datalist'
                    label='Browser'
                    type='text'
                    name='browser'
                    list='browsers'
                    options={browserOptions}
                    required={true}
                />
                <FormikControl 
                    control='radio'
                    label='Gender'
                    name='gender'
                    options={genderOptions}
                    required={true}
                /><FormikControl 
                    control='radio'
                />
                <FormikControl 
                    control='checkbox'
                    label='Languages'
                    name='languages'
                    options={languageOptions}
                />
                <FormikControl 
                    control='date'
                    label='Pick a date'
                    name='birthDate'
                    required={true}
                />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;

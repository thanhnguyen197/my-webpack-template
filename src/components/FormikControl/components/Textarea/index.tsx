import React from 'react';
import {Field, ErrorMessage} from 'formik';

// Components
import TextError from 'Components/FormikControl/components/TextError';

export interface ITextarea {
    label?: string;
    name: string;
    type?: string;
    className?:string
    required?:boolean;
    minLength?:string | number;
    maxLength?:string | number;
    size?:string | number;
    readOnly?:boolean; 
    placeholder?:string; 
    cols?: string | number;
    rows?: string | number;
    autocomplete?: string;
}

const Textarea:React.FC<ITextarea> = (props) => {
    const {label, name, ...rest} = props;

    return (
        <div className='form-control'>
            {label ? <label className='field-label' htmlFor={name}>{label}</label> : null}
            <Field as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

Textarea.defaultProps = {
    label: '',
    name: 'textarea'
};

export default Textarea;

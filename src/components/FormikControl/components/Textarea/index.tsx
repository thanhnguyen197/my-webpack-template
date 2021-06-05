import React from 'react';
import {Field, ErrorMessage} from 'formik';

// Components
import TextError from 'Components/FormikControl/components/TextError';

const Textarea:React.FC<any> = (props) => {
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

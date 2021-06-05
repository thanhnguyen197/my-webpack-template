import React from 'react';
import {Field, ErrorMessage} from 'formik';

// components
import TextError from 'Components/FormikControl/components/TextError';

const CheckboxGroup:React.FC<any> = (props) => {
    const {label, name, options, ...rest} = props;

    return (
        <div className="form-control">
            {label ? <label className='field-label'>{label}</label> : null}
            <Field name={name} {...rest}>
                {({field}:any) => (
                    <div className="checkbox-group">
                        {options && options.length && options.map((option:any) => (
                            <div className="checkbox-item" key={option.key}>
                                <input 
                                    type="checkbox" 
                                    id={option.value} 
                                    {...field}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </div>
                        ))}
                    </div>
                )}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

CheckboxGroup.defaultProps = {
    label: '',
    name: 'checkboxGroup',
    options: []
};

export default CheckboxGroup;

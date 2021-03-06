import React from 'react';
import { Field } from 'react-final-form';

export default ({ name, selectOptions, iconClass, label }) => {
    const renderSelect = ({ input, meta: { touched, error }, children }) => (
        <>
            <select {...input}>{children}</select>
            {touched && error && <p className="help is-danger pb-1">{error}</p>}
        </>
    );

    return (
        <div className="field field-select">
            <div className="control has-icons-left">
                <div className="select is-fullwidth">
                    <Field name={name} component={renderSelect}>
                        <option disabled value="defaultSelect">
                            {label}
                        </option>
                        {selectOptions.map((option, i) => (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </Field>
                </div>
                <span className="icon is-left">
                    <i className={`fas ${iconClass}`} />
                </span>
            </div>
        </div>
    );
};

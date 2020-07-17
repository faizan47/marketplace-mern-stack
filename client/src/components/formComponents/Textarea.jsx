import React from 'react';

export default ({ input, placeholder, label, meta: { error, touched } }) => (
    <div className="field">
        <label className="label">{label}</label>
        <div className="control">
            <textarea className="textarea" {...input} placeholder={placeholder} />
        </div>
        {touched && error && <p className="help is-danger">{error}</p>}
    </div>
);

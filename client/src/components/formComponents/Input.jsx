import React from "react";

export default props => {
    const { placeholder, iconClass, label, input, meta } = props;
    const { touched, error } = meta;
    const inputMarkup =
        input.type === "number" ? (
            <input
                {...input}
                type="text"
                className="input"
                placeholder={placeholder}
            />
        ) : (
            <input {...input} className="input" placeholder={placeholder} />
        );

    return (
        <>
            <div className="field">
                {label ? <label className="label">{label}</label> : null}
                <div className="control has-icons-left">
                    {inputMarkup}
                    <span className="icon is-small is-left">
                        <i className={`fas ${iconClass}`} />
                    </span>
                </div>
                {touched && error && <p className="help is-danger">{error}</p>}
            </div>
        </>
    );
};

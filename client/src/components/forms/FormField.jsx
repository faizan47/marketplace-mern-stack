import React, { Fragment } from 'react';

const FormField = ({ input, fieldAttrs: { label, type, placeholder, iconClass }, meta: { error, touched } }) => {
	const renderInputType = (type) => {
		switch (type) {
			case 'textarea':
				return <textarea className="textarea" {...input} placeholder={placeholder} />;
			case 'file':
				return (
					<div className="file ">
						<label className="file-label">
							<input className="file-input" type="file" name="resume" multiple />
							<span className="file-cta">
								<span className="file-icon">
									<i className="fas fa-upload" />
								</span>
								<span className="file-label">Upload some images…</span>
							</span>
						</label>
					</div>
				);

			default:
				return (
					<Fragment>
						<input className="input" type={type} {...input} placeholder={placeholder} />
						<span className="icon is-small is-left">
							<i className={`fas ${iconClass}`} />
						</span>
					</Fragment>
				);
		}
	};

	return (
		<div className="field">
			<label className="label">{label}</label>
			<div className="control has-icons-left ">{renderInputType(type)}</div>
			<p className="help is-danger has-text-weight-semibold">{touched && error}</p>
		</div>
	);
};
export default FormField;

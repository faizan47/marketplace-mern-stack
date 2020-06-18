import React, { Fragment } from 'react';

export default ({ htmlType, placeholder, iconClass, label, input }) => {
	return (
		<Fragment>
			<div className="field">
				<label className="label">{label}</label>
				<div className="control has-icons-left">
					<input {...input} className="input" type={htmlType} placeholder={placeholder} />
					<span className="icon is-small is-left">
						<i className={`fas ${iconClass}`} />
					</span>
				</div>
			</div>
		</Fragment>
	);
};

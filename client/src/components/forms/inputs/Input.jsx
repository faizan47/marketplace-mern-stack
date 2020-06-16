import React, { Fragment } from 'react';

export default ({ htmlType, iconClass, input, placeholder }) => (
	<Fragment>
		<input className="input" type={htmlType} {...input} placeholder={placeholder} />
		<span className="icon is-small is-left">
			<i className={`fas ${iconClass}`} />
		</span>
	</Fragment>
);

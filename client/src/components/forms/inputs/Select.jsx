import React from 'react';
import { Field } from 'redux-form';

export default ({ name, selectOptions, iconClass }) => {
	return (
		<div className="control has-icons-left">
			<div className="select ">
				<Field name={name} component="select">
					{selectOptions.map(option => <option key={option}>{option}</option>)}
				</Field>
			</div>
			<span className="icon is-left">
				<i className={`fas ${iconClass}`} />
			</span>
		</div>
	);
};

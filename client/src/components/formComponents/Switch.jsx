import React, { Fragment } from 'react';
import './switchStyle.css';

export default ({ name, label, switchOptions, input }) => {
	const { onChange, value } = input;
	return (
		<Fragment>
			<div className="field">
				<label htmlFor={name} className="label">
					{label}
				</label>
				<label className="form-switch">
					<span className="mr-1">{switchOptions.left}</span>
					<input
						{...input}
						type="checkbox"
						defaultChecked={!!value}
						onChange={(e, data) => onChange(data.checked)}
					/>
					<i />
					<span className="ml-1">{switchOptions.right}</span>
				</label>
			</div>
		</Fragment>
	);
};

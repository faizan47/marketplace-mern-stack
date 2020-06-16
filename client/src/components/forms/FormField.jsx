import React from 'react';
import Select from './inputs/Select';
import Textarea from './inputs/Textarea';
import Input from './inputs/Input';
import ImageUpload from './inputs/ImageUpload';

const FormField = ({
	name,
	input,
	label,
	htmlType,
	placeholder,
	iconClass,
	selectOptions,
	meta: { error, touched }
}) => {
	const renderInputType = htmlType => {
		console.log(htmlType);

		switch (htmlType) {
			case 'textarea':
				return <Textarea input={input} placeholder={placeholder} />;
			case 'file':
				return <ImageUpload name={name} />;
			default:
				return <Input input={input} placeholder={placeholder} htmlType={htmlType} iconClass={iconClass} />;
		}
	};

	return (
		<div className="field">
			<label className="label">{label}</label>
			<div className="control has-icons-left">{renderInputType(htmlType)}</div>
			<p className="help is-danger has-text-weight-semibold">{touched && error}</p>
		</div>
	);
};
export default FormField;

import React, { Fragment } from 'react';
import ReactCloudinaryUploader from '@app-masters/react-cloudinary-uploader';
let options = {
	cloud_name: '',
	upload_preset: '',
	multiple: true,
	returnJustUrl: true,
	showPoweredBy: false
};
const FormField = ({ input, label, htmlType, placeholder, iconClass, selectOptions, meta: { error, touched } }) => {
	const renderInputType = htmlType => {
		switch (htmlType) {
			case 'textarea':
				return <textarea className="textarea" {...input} placeholder={placeholder} />;
			case 'file':
				return (
					<div className="file ">
						<label className="file-label">
							<input className="file-input" type="" name="resume" multiple />
							<span
								onClick={() => {
									ReactCloudinaryUploader.open(options)
										.then(image => {
											if (this.props.returnJustUrl) image = image.url;
											console.log('image', image);
										})
										.catch(err => {
											console.error(err);
										});
								}}
								className="file-cta"
							>
								<span className="file-icon">
									<i className="fas fa-upload" />
								</span>
								<span className="file-label">Upload some images…</span>
							</span>
						</label>
					</div>
				);
			case 'select':
				return (
					<div className="control has-icons-left">
						<div className="select ">
							<select>{selectOptions.map(option => <option key={option}>{option}</option>)}</select>
						</div>
						<span className="icon is-left">
							<i className={`fas ${iconClass}`} />
						</span>
						<ReactCloudinaryUploader
							cloudName={options.cloud_name}
							uploadPreset={options.upload_preset}
							onUploadSuccess={image => {
								console.log('image', image);
							}}
						/>
					</div>
				);
			default:
				return (
					<Fragment>
						<input className="input" type={htmlType} {...input} placeholder={placeholder} />
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
			<div className="control has-icons-left">{renderInputType(htmlType, selectOptions)}</div>
			<p className="help is-danger has-text-weight-semibold">{touched && error}</p>
		</div>
	);
};
export default FormField;

import React from 'react';

export const renderInputType = htmlType => {
	switch (htmlType) {
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
		case 'select':
			return (
				<div className="control has-icons-left is-fullwidth">
					<div className="select ">
						<select>{selectOptions.map(option => <option>option</option>)}</select>
					</div>
					<span className="icon is-left">
						<i className={`fas ${iconClass}`} />
					</span>
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

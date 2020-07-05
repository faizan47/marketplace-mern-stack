import React from 'react';
import ImageUploader from 'react-images-upload';

const ImageUpload = ({ input, name, label, defaultImages, input: { onChange } }) => {
	const onDrop = (pictureFiles, pictureDataURLs) => {
		const URLs = pictureDataURLs.filter(url => url.includes('res.cloudinary'));
		onChange([ ...pictureFiles, ...URLs ]);
	};

	return (
		<div className="field">
			<div className="label">{label}</div>
			<ImageUploader
				defaultImages={defaultImages}
				input={input}
				name={name}
				withIcon={true}
				buttonText="Upload"
				buttonClassName="button is-light"
				onChange={onDrop}
				imgExtension={[ '.jpg', '.gif', '.png', '.gif' ]}
				maxFileSize={5242880}
				withPreview={true}
				withLabel={true}
				errorClass="help is-danger"
				labelClass="file-label"
				// defaultImages={props.fieldAttrs.defaultImages}
				// input={props.fieldAttrs.data.input}
				// name={props.fieldAttrs.data.name}
				// withIcon={true}
				// withPreview={true}
				// buttonText="Choose images"
				// onChange={onDrop}
				// buttonClassName="button is-primary"
				// imgExtension={[ '.jpg', '.gif', '.png', '.gif', '.jpeg' ]}
				// maxFileSize={5242880}
				// errorClass="help is-danger"
				// labelClass="file-label"
			/>
		</div>
	);
};

export default ImageUpload;

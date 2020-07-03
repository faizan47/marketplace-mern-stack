import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {
	// state = { pictures: [] };

	onDrop = (pictureFiles, pictureDataURLs) => {
		const { input: { onChange } } = this.props;
		const URLs = pictureDataURLs.filter(url => url.includes('res.cloudinary'));

		onChange([ ...pictureFiles, ...URLs ]);
	};
	render() {
		return (
			<div className="field">
				<div className="label">{this.props.label}</div>
				<ImageUploader
					defaultImages={this.props.defaultImages}
					input={this.props.input}
					name={this.props.name}
					withIcon={true}
					buttonText="Upload"
					buttonClassName="button is-light"
					onChange={this.onDrop}
					imgExtension={[ '.jpg', '.gif', '.png', '.gif' ]}
					maxFileSize={5242880}
					withPreview
					withLabel={true}
					errorClass="help is-danger"
					labelClass="file-label"
				/>
			</div>
		);
	}
}

export default ImageUpload;

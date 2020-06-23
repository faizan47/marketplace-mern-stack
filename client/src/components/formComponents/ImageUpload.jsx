import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {
	state = { pictures: [] };

	onDrop = (pictureFiles, pictureDataURLs) => {
		// https://stackoverflow.com/questions/40811451/remove-duplicates-from-a-array-of-objects
		const uniqueFiles = pictureFiles.filter(function(a) {
			return !this[a.name] && (this[a.name] = true);
		}, Object.create(null));
		this.setState({
			pictures: this.state.pictures.concat(pictureFiles)
		});

		const { input: { onChange } } = this.props;
		const URLs = pictureDataURLs.filter(url => url.includes('res.cloudinary'));

		onChange([ ...uniqueFiles, ...URLs ]);
	};
	render() {
		// console.log(this.state.pictures);

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

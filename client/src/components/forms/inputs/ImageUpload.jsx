import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {
	state = { pictures: [] };
	onDrop = picture => {
		this.setState({
			pictures: this.state.pictures.concat(picture)
		});
	};

	render() {
		return (
			<ImageUploader
				name={this.props.name}
				withIcon={true}
				buttonText="Upload"
				buttonClassName="button is-light"
				onChange={this.onDrop}
				imgExtension={[ '.jpg', '.gif', '.png', '.gif' ]}
				maxFileSize={5242880}
				withPreview
				withLabel={true}
			/>
		);
	}
}

export default ImageUpload;

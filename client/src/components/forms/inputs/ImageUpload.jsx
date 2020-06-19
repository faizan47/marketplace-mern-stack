import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {
	state = { pictures: [] };

	onDrop = pictures => {
		this.setState({
			pictures: this.state.pictures.concat(pictures)
		});
	};
	onChange = image => {
		const { input: { onChange } } = this.props;
		onChange(image);
	};
	render() {
		return (
			<ImageUploader
				myFunction={this.onChange}
				input={this.props.input}
				name={this.props.name}
				withIcon={true}
				buttonText="Upload"
				buttonClassName="button is-light"
				onChange={this.onChange}
				imgExtension={[ '.jpg', '.gif', '.png', '.gif' ]}
				maxFileSize={5242880}
				withPreview
				withLabel={true}
			/>
		);
	}
}

export default ImageUpload;

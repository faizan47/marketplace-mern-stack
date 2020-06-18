import React, { Component } from 'react';
import ImageUploader from '../../react-images-upload/index';
import axios from 'axios';

class ImageUpload extends Component {
	state = { pictures: [] };

	onDrop = async pictures => {
		const REACT_APP_CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
		const REACT_APP_CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
		const URL = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

		const promises = pictures.map(async picture => {
			const formData = new FormData();
			formData.append('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET);
			formData.append('file', picture);
			const { data: { secure_url } } = await axios.post(URL, formData);
			return secure_url;
		});
		const listingImages = await Promise.all(promises);
		console.log(listingImages);

		this.props.input.value = listingImages;

		this.setState({
			pictures: this.state.pictures.concat(pictures)
		});
	};
	bindActions = () => {
		//  name: "ListingImages"
		//  onBlur: function handleBlur(event)​
		//  onChange: function handleChange(event)​
		// onDragStart: function handleDragStart(event)​
		// onDrop: function handleDrop(event)​
		//  onFocus: function handleFocus(event)
	};
	render() {
		return (
			<ImageUploader
				{...this.props.input}
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
			/>
		);
	}
}

export default ImageUpload;

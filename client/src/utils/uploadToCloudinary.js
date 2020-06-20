import axios from 'axios';

export default async (images = []) => {
	const REACT_APP_CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
	const REACT_APP_CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
	const URL = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;
	if (images.length) {
		const promises = images.map(async (picture) => {
			const formData = new FormData();
			formData.append('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET);
			formData.append('file', picture);
			const { data: { secure_url } } = await axios.post(URL, formData);

			return secure_url;
		});
		return await Promise.all(promises);
	}
};

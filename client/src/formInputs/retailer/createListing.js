export const createListingInputs = [
	{
		name: 'title',
		label: 'Enter a short title for your requirement',
		placeholder: 'Need 500 N95 masks',
		type: 'text',
		iconClass: 'fa-info'
	},
	{
		name: 'description',
		label: 'Enter more information about your requirement',
		placeholder: 'We need 500 N95 masks as soon as possible. They need to be ISI & ISO certified.',
		type: 'textarea'
	},
	{
		name: 'category',
		label: 'Select a category',
		placeholder: '1500',
		type: 'select',
		iconClass: 'fa-tag',
		selectOptions: [ 'Cars', 'Furniture', 'Electronics & Appliances', 'Mobiles', 'Bikes', 'Textile' ]
	},
	{
		name: 'quantity',
		label: 'Enter quantity needed',
		placeholder: '1500',
		type: 'number',
		iconClass: 'fa-balance-scale'
	},
	{
		name: 'images',
		label: 'Upload some images',
		type: 'file',
		iconClass: 'fa-file-image'
	}
];

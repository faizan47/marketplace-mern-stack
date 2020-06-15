export const createListingInputs = [
	{
		name: 'requirement',
		label: 'Enter a short title for your requirement',
		placeholder: 'Need 500 N95 masks',
		type: 'text',
		iconClass: 'fa-info'
	},
	{
		name: 'image',
		label: 'Upload some images',
		placeholder: 'mySecretPassword',
		type: 'file',
		iconClass: 'fa-lock',
		htmlType: 'file'
	},
	{
		name: 'quantity',
		label: 'Enter quantity needed',
		placeholder: '1500',
		type: 'number',
		iconClass: 'fa-balance-scale'
	},
	{
		name: 'category',
		label: 'Select your category',
		placeholder: '1500',
		type: 'select',
		iconClass: 'fa-tag',
		htmlType: 'select',
		selectOptions: [ 'Cars', 'Furniture', 'Electronics & Appliances', 'Mobiles', 'Bikes', 'Textile' ]
	},
	{
		name: 'description',
		label: 'Enter more information about your requirement',
		placeholder: 'We need 500 N95 masks as soon as possible. They need to be ISI & ISO certified.',
		type: 'text',
		htmlType: 'textarea'
	}
];

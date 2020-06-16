export const createListingInputs = [
	{
		name: 'listingTitle',
		label: 'Enter a short title for your requirement',
		placeholder: 'Need 500 N95 masks',
		type: 'text',
		iconClass: 'fa-info'
	},
	{
		name: 'listingDescription',
		label: 'Enter more information about your requirement',
		placeholder: 'We need 500 N95 masks as soon as possible. They need to be ISI & ISO certified.',
		type: 'text',
		htmlType: 'textarea'
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
		selectOptions: [ 'Cars', 'Furniture', 'Electronics & Appliances', 'Mobiles', 'Bikes', 'Textile' ]
	},
	{
		name: 'ListingImages',
		label: 'Upload some images',
		type: 'file',
		iconClass: 'fa-file-image',
		htmlType: 'file'
	}
];

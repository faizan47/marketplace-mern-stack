export const searchInputs = [
	{
		name: 'search',
		label: 'Search Listings',
		placeholder: 'Enter Search Term',
		type: 'text',
		iconClass: 'fa-search',
		optional: true
	},
	{
		name: 'category',
		label: 'Select a category',
		placeholder: '1500',
		type: 'select',
		iconClass: 'fa-tag',
		selectOptions: [ 'Cars', 'Furniture', 'Electronics & Appliances', 'Mobiles', 'Bikes', 'Textile' ],
		optional: true
	}
];

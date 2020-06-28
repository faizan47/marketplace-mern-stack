export const signUpInputs = [
	{
		name: 'name',
		label: 'Enter your name',
		placeholder: 'John Doe',
		type: 'text',
		iconClass: 'fa-user'
	},
	{
		name: 'company',
		label: 'Enter your company name',
		placeholder: 'Acme Corporation',
		type: 'text',
		iconClass: 'fa-building'
	},
	{
		name: 'email',
		label: 'Enter your email',
		placeholder: 'john.doe@example.com',
		type: 'email',
		iconClass: 'fa-envelope'
	},
	{
		name: 'password',
		label: 'Enter your password',
		placeholder: 'mySecretPassword',
		type: 'password',
		iconClass: 'fa-lock'
	},
	{
		name: 'password confirmation',
		label: 'Reenter your password',
		placeholder: 'mySecretPassword',
		type: 'password',
		iconClass: 'fa-lock'
	}
	// {
	// 	name: 'role',
	// 	type: 'switch',
	// 	switchOptions: { left: 'Retailer', right: 'Distributor' },
	// 	label: 'Sign up as',
	// 	switchValues: { left: 'retailer', right: 'distributor' }
	// }
];

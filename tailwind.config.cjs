const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				tiny: [
					'.5rem',
					{
						letterSpacing: '-0.01rem'
					}
				]
			}
		}
	},

	plugins: []
};

module.exports = config;

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				xxs: [
					'.65rem',
					{
						letterSpacing: '-0.01rem'
					}
				],
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
}

module.exports = config

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				'3xl':
					'rgba(255, 255, 255, 0.2) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(0, 0, 0, 0.3) 0px 0px 60px -30px'
			},
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

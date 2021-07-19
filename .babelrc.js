const presets = [
	'@babel/react',
	[
		'@babel/env',
		{
			targets: {
				browsers: 'last 2 version',
			},
			useBuiltIns:'usage'
		}
	]
]

module.exports ={presets}
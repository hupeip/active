module.exports = {
	html: [
		{
			entry: './src/active01/main.js',
			output: 'dist/page01',
			description: {
				key: '观音诞辰',
				title: '观音诞辰',
				desc: '观音诞辰,观音诞辰,观音诞辰,观音诞辰'
			}
		},
		{
			entry: './src/active02/main.js',
			output: 'dist/page02',
			description: {
				key: '普贤菩萨',
				title: '普贤菩萨',
				desc: '普贤菩萨。普贤菩萨。普贤菩萨'
			}
		}
	],
	index: 0
}

/*
	有新的活动专题就给html这个数组添加一个元素，
	例如：
		{
			entry: './src/active03/main.js',
			output: 'dist/page03',
			description: {
				key: '新的活动，新的活动',
				title: '新的活动',
				desc: ''
			}
		}
	index对应的是当前需要打包的活动专题，当前活动专题是第几个，这里的index就改成多少
*/
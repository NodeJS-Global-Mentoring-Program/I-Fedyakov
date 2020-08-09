process.stdin.on('data', (data) => {
	const reversed = data.toString().split('').reverse().join('');
	console.log(reversed);
})

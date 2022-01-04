export function formatCount(count: number, withAbbr = true, decimals = 2) {
	const COUNT_ABBRS = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
	const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
	let result:any = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
	if (withAbbr) {
		result += `${COUNT_ABBRS[i]}`;
	}
	return result;
}


export function format(date: Date | string | number, format: string): string {
  const generatedDate = new Date(date);

	const year = generatedDate.getUTCFullYear();
	const month = ('0' + (generatedDate.getUTCMonth() + 1)).slice(-2)
	const day = ('0' + generatedDate.getUTCDate()).slice(-2);

	return format.replace("yyyy", year.toString())
	.replace("MM", month)
	.replace("dd", day);
};

export default {
	format
};
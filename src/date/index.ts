export function format(date: Date | string | number, format: string): string {
  const generatedDate = new Date(date);

	const year = generatedDate.getUTCFullYear();
	const month = ('0' + (generatedDate.getUTCMonth() + 1)).slice(-2);
	const day = ('0' + generatedDate.getUTCDate()).slice(-2);

	return format.replace("yyyy", year.toString())
	.replace("MM", month)
	.replace("dd", day);
};

export function getDaysDiff(date: string | Date, initDate?: string | Date): number{
	date = new Date(date);
	initDate = initDate ? new Date(initDate) : new Date();

	const diff = date.getTime() - initDate.getTime();

	const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

	return days;
}

export function getTimeDiff(date: string | Date, initDate?: string | Date): number{
	date = new Date(date);
	initDate = initDate ? new Date(initDate) : new Date();

	const diff = date.getTime() - initDate.getTime();

	return diff;
}

export default {
	format,
	getDaysDiff,
	getTimeDiff,
};
export function getTimeDiff(date: string | Date, initDate?: string | Date): number{
	date = new Date(date);
	initDate = initDate ? new Date(initDate) : new Date();

	const diff = date.getTime() - initDate.getTime();

	return diff;
}
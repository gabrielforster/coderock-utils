export function getTimeDiff(date: string | Date, initDate?: string | Date, exactMatch?: boolean): number{
	date = new Date(date);
	initDate = initDate ? new Date(initDate) : new Date();

	const diff = date.getTime() - initDate.getTime();

	if(exactMatch) return diff;

	return Math.abs(diff);
}

export function getDaysDiff(date: string | Date, initDate?: string | Date): number{
	date = new Date(date);
	initDate = initDate ? new Date(initDate) : new Date();

	const diff = date.getTime() - initDate.getTime();

	const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

	return days;
}

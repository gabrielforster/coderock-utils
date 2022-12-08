export function deep(obj: any, paths: string): {} | string | undefined {
		const pathList = paths.replace(/\[(\d+)]/g, '.$1').split('.')
		return (pathList.every(step => (obj = obj[step as string]) !== undefined)) ? obj : undefined;
}

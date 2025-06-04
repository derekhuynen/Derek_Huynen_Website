/**
 * Formats a date string or Date object to 'MMM D, YYYY' (e.g., 'Jun 3, 2025').
 * @param date - The date to format (string or Date).
 * @returns Formatted date string.
 */
export function formatDate(date: string | Date): string {
	const d = typeof date === 'string' ? new Date(date) : date;
	if (isNaN(d.getTime())) return '';
	return d.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

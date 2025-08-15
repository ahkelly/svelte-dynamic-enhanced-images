/**
 * Format an ISO-formatted date string to a US-friendly date string
 * (MM/DD/YYYY).
 *
 * @param {string} isoString - ISO-formatted date string
 * @returns {string} US-friendly date string
 */
export function formatToUSDate(isoString = '') {
	const date = new Date(isoString);

	// Use toLocaleDateString for robust and locale-aware formatting
	// 'en-US' ensures United States date format (MM/DD/YYYY)
	// Options can be added for more detailed formatting (e.g., weekday, time)
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
}

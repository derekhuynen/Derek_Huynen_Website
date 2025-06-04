// Helper to get the first N lines, preserving paragraph breaks
export const getFirstNLinesWithParagraphs = (
	text: string | undefined,
	n: number
) => {
	if (!text) return '';
	const paragraphs = text.split(/\n\n+/);
	const lines: string[] = [];
	let count = 0;
	for (const para of paragraphs) {
		const paraLines = para.split(/\n/);
		for (const line of paraLines) {
			if (count < n) {
				lines.push(line);
				count++;
			}
		}
		if (count >= n) break;
		// Add a paragraph break if not at the end
		if (count < n) lines.push('');
	}
	// Reconstruct text with paragraph breaks
	return lines.join('\n');
};

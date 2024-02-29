/**
 * Sanitizes a string to only contain numeric characters
 * Convert 全角 to 半角 numbers
 * @param str 
 */
export const sanitizeNumericString = (str: string) => str
	.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
	.replace(/[^0-9]/g, '');
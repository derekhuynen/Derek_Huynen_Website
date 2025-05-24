// Interface for tech icon configuration
export interface IconConfig {
	iconName: string;
	iconLibrary: 'fa' | 'si' | 'md' | 'ai' | 'svg';
	color: string;
	svgPath?: string; // Path to SVG file for custom icons
	displayLabel?: string; // Optional custom display label (if different from key)
}

import React from 'react';
import type { GetIconOptions } from 'types/GetIconOptions';
import type { IconConfig } from 'types/IconConfig';

export async function getIconElement(
	config: IconConfig | undefined,
	options: GetIconOptions = {}
): Promise<React.ReactElement | null> {
	if (!config) return null;
	const { size = 'small', color } = options;

	if (config.iconLibrary === 'svg' && config.svgPath) {
		return React.createElement('img', {
			src: config.svgPath,
			alt: config.iconName,
			style: {
				width: size === 'small' ? '16px' : '20px',
				height: size === 'small' ? '16px' : '20px',
				filter: 'none',
			},
		});
	}

	let iconComponent: React.ComponentType<{ color?: string }> | undefined;
	try {
		if (config.iconLibrary === 'fa') {
			const module = await import('react-icons/fa');
			iconComponent = module[
				config.iconName as keyof typeof module
			] as React.ComponentType<{ color?: string }>;
		} else if (config.iconLibrary === 'si') {
			const module = await import('react-icons/si');
			iconComponent = module[
				config.iconName as keyof typeof module
			] as React.ComponentType<{ color?: string }>;
		} else if (config.iconLibrary === 'md') {
			const module = await import('react-icons/md');
			iconComponent = module[
				config.iconName as keyof typeof module
			] as React.ComponentType<{ color?: string }>;
		} else if (config.iconLibrary === 'ai') {
			const module = await import('react-icons/ai');
			iconComponent = module[
				config.iconName as keyof typeof module
			] as React.ComponentType<{ color?: string }>;
		}
		if (iconComponent) {
			return React.createElement(iconComponent, {
				color: color || config.color,
			});
		}
	} catch {
		return null;
	}
	return null;
}

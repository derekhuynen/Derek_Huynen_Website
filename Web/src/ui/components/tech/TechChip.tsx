import React, { useState, useEffect } from 'react';
import { Chip } from '@mui/material';
import { getIconConfig } from '../icon_service/iconMap';
import { getIconElement } from '../icon_service/iconService';

export interface TechChipProps {
    name: string;
    label?: string;
    iconKey?: string;
    size?: 'small' | 'medium';
    showIcon?: boolean;
    className?: string;
    onClick?: () => void;
    onDelete?: () => void;
}

const TechChip: React.FC<TechChipProps> = ({
    name,
    label,
    iconKey,
    size = 'small',
    showIcon = true,
    className,
    onClick,
    onDelete
}) => {
    const [iconElement, setIconElement] = useState<React.ReactElement | null>(null);
    const iconLookupKey = iconKey || name;
    const config = getIconConfig(iconLookupKey);
    const displayText = label || config?.displayLabel || name;
    useEffect(() => {
        let ignore = false;
        if (!showIcon || !config) {
            setIconElement(null);
            return;
        }
        const loadIcon = async () => {
            const icon = await getIconElement(config, { size });
            if (!ignore) setIconElement(icon);
        };
        loadIcon();
        return () => { ignore = true; };
    }, [showIcon, config, size]);
    return (
        <Chip
            label={displayText}
            size={size}
            icon={iconElement || undefined}
            onClick={onClick}
            onDelete={onDelete}
            className={className}
            sx={(theme) => ({
                bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
                color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
                fontWeight: 500,
                borderRadius: 1,
                px: 1,
                pl: iconElement ? 0.5 : 2,
                transition: 'all 0.2s ease',
                '&:hover': onClick ? {
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
                    transform: 'scale(1.05)',
                } : {},
                my: 0.5,
                mx: 0.3,
            })}
        />
    );
};

export default TechChip;

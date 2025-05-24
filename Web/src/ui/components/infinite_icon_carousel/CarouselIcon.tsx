import React, { cloneElement, isValidElement } from 'react';
import { useTheme } from '@mui/material';

interface CarouselIconProps {
    icon: React.ReactNode;
    label: string;
    color?: string;
    size?: number;
    onClick?: () => void;
}

const CarouselIcon: React.FC<CarouselIconProps> = ({
    icon,
    label,
    color,
    size = 80,
    onClick
}) => {
    const theme = useTheme();
    const iconSize = Math.floor(size * 0.6);
    let sizedIcon = icon;
    if (isValidElement(icon)) {
        const props = icon.props as { [key: string]: unknown };
        const newProps: { [key: string]: unknown } = {
            style: {
                ...(typeof props.style === 'object' ? props.style : {}),
                fontSize: iconSize,
                width: iconSize,
                height: iconSize
            }
        };
        if ('fontSize' in props) {
            newProps.fontSize = 'inherit';
        }
        if ('sx' in props) {
            newProps.sx = {
                ...(typeof props.sx === 'object' ? props.sx : {}),
                fontSize: iconSize
            };
        }
        sizedIcon = cloneElement(icon, newProps);
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                cursor: onClick ? 'pointer' : 'default',
                transition: 'transform 0.2s',
                padding: '4px',
            }}
            onClick={onClick}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: size,
                    height: size,
                    minWidth: size,
                    background: theme.palette.background.paper,
                    borderRadius: '50%',
                    boxShadow: theme.shadows[2],
                    transition: 'transform 0.2s',
                    color: color || 'inherit',
                    fontSize: iconSize,
                }}
                className="icon-container"
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15)';
                    e.currentTarget.style.background = theme.palette.secondary.main;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = theme.palette.background.paper;
                }}
            >
                {sizedIcon}
            </div>
            <span style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: theme.palette.text.primary,
                whiteSpace: 'nowrap',
            }}>
                {label}
            </span>
        </div>
    );
};

export default CarouselIcon;

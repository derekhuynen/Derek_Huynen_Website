import React, { useEffect, useRef, useState } from 'react';
import CarouselIcon from './CarouselIcon';
import { getIconConfig } from '../icon_service/iconMap';
import { getIconElement } from '../icon_service/iconService';

interface InfiniteIconCarouselProps {
    items: string[];
    onItemClick?: (iconKey: string) => void;
    speed?: number;
    gap?: number;
    iconSize?: number;
}

const InfiniteIconCarousel: React.FC<InfiniteIconCarouselProps> = ({
    items,
    onItemClick,
    speed = 1,
    gap = 20,
    iconSize = 56
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemSetWidth, setItemSetWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const requestRef = useRef<number>(0);
    const positionRef = useRef(0);
    const [iconElements, setIconElements] = useState<{ icon: React.ReactNode; label: string }[]>([]);
    const itemsRef = useRef(items);

    useEffect(() => {
        itemsRef.current = items;
        const calculateWidths = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
            const singleItemWidth = iconSize * 1.5 + gap;
            const newItemSetWidth = items.length * singleItemWidth;
            setItemSetWidth(newItemSetWidth);
        };
        calculateWidths();
        window.addEventListener('resize', calculateWidths);
        return () => {
            window.removeEventListener('resize', calculateWidths);
        };
    }, [items, iconSize, gap]);

    useEffect(() => {
        let ignore = false;
        const loadIcons = async () => {
            const icons = await Promise.all(
                items.map(async (iconKey) => {
                    const config = getIconConfig(iconKey);
                    const icon = await getIconElement(config, { size: 'medium' });
                    const label = config?.displayLabel || iconKey;
                    return { icon, label };
                })
            );
            if (!ignore) setIconElements(icons);
        };
        loadIcons();
        return () => { ignore = true; };
    }, [items]);

    useEffect(() => {
        let previousTime = 0;
        const animate = (time: number) => {
            if (previousTime === 0) {
                previousTime = time;
                requestRef.current = requestAnimationFrame(animate);
                return;
            }
            const deltaTime = time - previousTime;
            previousTime = time;
            if (!isPaused && innerRef.current) {
                const pixelsPerSecond = (speed * 50);
                const moveAmount = (pixelsPerSecond * deltaTime) / 1000;
                positionRef.current -= moveAmount;
                if (positionRef.current <= -itemSetWidth) {
                    positionRef.current += itemSetWidth;
                }
                innerRef.current.style.transform = `translateX(${positionRef.current}px)`;
            }
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, [isPaused, itemSetWidth, speed]);

    const getRepeatedItems = () => {
        let duplications = 3;
        if (containerWidth > 0 && itemSetWidth > 0) {
            duplications = Math.ceil(containerWidth / itemSetWidth) + 1;
        }
        let result: { icon: React.ReactNode; label: string; iconKey: string }[] = [];
        for (let i = 0; i < duplications; i++) {
            result = [
                ...result,
                ...itemsRef.current.map((iconKey, idx) => ({
                    icon: iconElements[idx]?.icon,
                    label: iconElements[idx]?.label || iconKey,
                    iconKey,
                }))
            ];
        }
        return result;
    };

    const repeatedItems = getRepeatedItems();

    return (
        <div
            ref={containerRef}
            style={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                padding: '10px 0',
                position: 'relative',
            }}
            className="icons-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                ref={innerRef}
                style={{
                    display: 'flex',
                    gap: `${gap}px`,
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    left: '0',
                }}
                className="icons-inner"
            >
                {repeatedItems.map((item, index) => (
                    <CarouselIcon
                        key={`icon-${index}`}
                        icon={item.icon}
                        label={item.label}
                        size={iconSize}
                        onClick={() => onItemClick?.(item.iconKey)}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteIconCarousel;

import React, { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import useAppConfig from 'store/useAppConfig';
import type { Experience } from "./ExperienceCard";
import ExperienceCard from "./ExperienceCard";

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    const theme = useAppConfig(state => state.theme);

    useEffect(() => {
        const styleId = 'vertical-timeline-date-color-fix';
        let style = document.getElementById(styleId) as HTMLStyleElement | null;
        if (!style) {
            style = document.createElement('style');
            style.id = styleId;
            document.head.appendChild(style);
        }
        style.innerHTML = `
            .vertical-timeline-element .timeline-date {
                color: ${theme === 'dark' ? '#ffb74d' : '#222222'} !important;
                margin-left: 20px;
                margin-right: 20px;
                font-weight: 600;
                text-align: center;
            }
            @media (max-width: 600px) {
                .vertical-timeline-element .timeline-date {
                    color: #222 !important;
                }
            }
        `;
    }, [theme]);

    return (
        <VerticalTimeline>
            {experiences.map((experience, idx) => (
                <VerticalTimelineElement
                    key={experience.title + experience.company + idx}
                    className="vertical-timeline-element--work"
                    date={experience.date}
                    iconStyle={{ background: "#1976d2", color: "#fff", boxShadow: "0 0 0 4px #fff, 0 2px 8px rgba(0,0,0,0.15)" }}
                    icon={null}
                    contentStyle={{
                        background: 'transparent',
                        color: "#222",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.07)"
                    }}
                    contentArrowStyle={{ borderRight: "7px solid #1976d2" }}
                    dateClassName="timeline-date"
                >
                    <ExperienceCard experience={experience} />
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default ExperienceTimeline;

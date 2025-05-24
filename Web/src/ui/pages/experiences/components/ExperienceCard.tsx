import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";

export interface Experience {
    title: string;
    company: string;
    location?: string;
    date: string;
    highlights: string[];
}

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#181818' : '#fafbfc',
                borderRadius: 3,
                boxShadow: 3,
                border: '1px solid',
                borderColor: (theme) => theme.palette.divider,
                p: { xs: 2, sm: 3 },
                mb: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1 }}>
                <Box>
                    <Typography variant="h6" fontWeight={800} sx={{ color: 'primary.main', mb: 0.5 }}>
                        {experience.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" fontWeight={600}>
                        {experience.company}
                        {experience.location ? ` — ${experience.location}` : ''}
                    </Typography>
                </Box>
                <Chip label={experience.date} color="secondary" sx={{ fontWeight: 600, fontSize: 14, px: 1.5, py: 0.5 }} />
            </Box>
            <Stack component="ul" spacing={0.5} sx={{ pl: 2, color: 'text.secondary', fontSize: 15, mb: 1 }}>
                {experience.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                ))}
            </Stack>
        </Box>
    );
};

export default ExperienceCard;

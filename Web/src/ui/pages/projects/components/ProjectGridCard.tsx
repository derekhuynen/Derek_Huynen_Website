import React from 'react';
import { Box, Stack } from '@mui/material';
import TechChip from 'ui/components/tech/TechChip';
import type { Project } from 'types/Project';

const ProjectGridCard: React.FC<Project & { skills?: string[] }> = ({
    title,
    description,
    type,
    startDate,
    endDate,
    company,
    role,
    date,
    tech,
    skills
}) => (
    <Box
        sx={{
            width: '100%',
            maxWidth: 400,
            minHeight: 220,
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#181818' : '#fafbfc',
            borderRadius: 3,
            boxShadow: 2,
            border: '1px solid',
            borderColor: (theme) => theme.palette.divider,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
        }}
    >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <span style={{ fontWeight: 700, color: 'var(--mui-palette-primary-main)', flexGrow: 1 }}>{title}</span>
            {type && (
                <span style={{ fontWeight: 600, fontSize: 12, padding: '2px 8px', borderRadius: 8, background: type === 'Work' ? '#1976d2' : '#9c27b0', color: '#fff' }}>{type}</span>
            )}
        </Box>
        {company && (
            <span style={{ fontWeight: 600, color: 'orange', marginBottom: 4 }}>{company}{role ? <span style={{ color: 'var(--mui-palette-primary-contrastText)', fontWeight: 600 }}>{` — ${role}`}</span> : ''}</span>
        )}
        {(date || (startDate && endDate)) && (
            <Box sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                fontSize: 13,
                color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[900],
                marginBottom: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                bgcolor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
                fontWeight: 600,
                width: 'fit-content',
                border: (theme) => `1px solid ${theme.palette.divider}`
            }}>
                <span role="img" aria-label="calendar">📅</span>
                {date || `${startDate} – ${endDate}`}
            </Box>
        )}
        <span style={{ color: 'var(--mui-palette-text-primary)', flexGrow: 1 }}>{description}</span>
        {/* Show tech if present, otherwise show skills if present */}
        {tech && tech.length > 0 ? (
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    flexWrap: 'wrap',
                    mt: 1,
                    mb: 0.5,
                    gap: 1,
                    rowGap: 1.5,
                    columnGap: 1.2,
                    alignItems: 'flex-start',
                }}
            >
                {tech.map((t: string) => (
                    <TechChip key={t} name={t} />
                ))}
            </Stack>
        ) : (skills && skills.length > 0 && (
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    flexWrap: 'wrap',
                    mt: 1,
                    mb: 0.5,
                    gap: 1,
                    rowGap: 1.5,
                    columnGap: 1.2,
                    alignItems: 'flex-start',
                }}
            >
                {skills.map((s: string) => (
                    <TechChip key={s} name={s} />
                ))}
            </Stack>
        ))}
    </Box>
);

export default ProjectGridCard;

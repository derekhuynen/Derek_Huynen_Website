import React from 'react';
import { Box, Stack } from '@mui/material';
import TechChip from 'ui/components/tech/TechChip';
import type { Project } from 'types/Project';
import { useNavigate } from 'react-router-dom';

const ProjectGridCard: React.FC<Project & { skills?: string[] }> = (props) => {
    const {
        title,
        short_description,
        full_description,
        type,
        startDate,
        endDate,
        role,
        date,
        tech,
        skills,
        industry,
        id
    } = props;
    const description = short_description || full_description || '';
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 400,
                minHeight: 220,
                position: 'relative',
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#181818' : '#fafbfc',
                borderRadius: 3,
                // Glow box shadow around the outside
                boxShadow: (theme) => `0 0 18px 4px ${theme.custom.main}22, 0 2px 8px ${theme.custom.main}10`,
                borderColor: (theme) => theme.palette.divider,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                zIndex: 1,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s, transform 0.2s',
                '&:hover': {
                    boxShadow: (theme) => `0 0 28px 8px ${theme.custom.main}33, 0 4px 16px ${theme.custom.main}18`,
                    transform: 'translateY(-2px) scale(1.02)',
                },
            }}
            onClick={() => navigate(`/projects/${id}`)}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                <span style={{ fontWeight: 700, color: 'var(--mui-palette-primary-main)', flexGrow: 1 }}>{title}</span>
                {type && (
                    <span style={{ fontWeight: 600, fontSize: 12, padding: '2px 8px', borderRadius: 8, background: type === 'Work' ? '#1976d2' : '#9c27b0', color: '#fff' }}>{type}</span>
                )}
            </Box>
            {industry && (
                <span style={{ fontWeight: 600, color: 'orange', marginBottom: 4 }}>{industry}{role ? <span style={{ color: 'var(--mui-palette-primary-contrastText)', fontWeight: 600 }}>{` — ${role}`}</span> : ''}</span>
            )}
            {(date || (startDate && (endDate !== undefined))) && (
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
                    {date || `${startDate ?? ''} – ${endDate === null ? 'Present' : endDate ?? ''}`}
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
                    {tech.slice(0, 6).map((t: string) => (
                        <TechChip key={t} name={t} />
                    ))}
                    {tech.length > 6 && (
                        <TechChip name={`+${tech.length - 6} more`} showIcon={false} />
                    )}
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
                    {skills.slice(0, 6).map((s: string) => (
                        <TechChip key={s} name={s} />
                    ))}
                    {skills.length > 6 && (
                        <TechChip name={`+${skills.length - 6} more`} showIcon={false} />
                    )}
                </Stack>
            ))}
        </Box>
    );
};

export default ProjectGridCard;

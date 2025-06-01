import React from 'react';
import { Box, Card, CardContent, Typography, Stack, Divider, IconButton } from '@mui/material';
import TechChip from 'ui/components/tech/TechChip';
import type { Project } from 'types/Project';
import { getIconElement } from 'ui/components/icon_service/iconService';
import { getIconConfig } from 'ui/components/icon_service/iconMap';

interface ProjectPageProfileProps {
    project: Project;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: 'primary.main' }}>{title}</Typography>
        <Divider sx={{ mb: 2 }} />
        {children}
    </Box>
);

const ProjectPageProfile: React.FC<ProjectPageProfileProps> = ({ project }) => {
    return (

        <Card elevation={3} sx={{ borderRadius: 4, maxWidth: 800, mx: 'auto', my: 4 }}>
            <CardContent>
                <Section title="Project Info">
                    <Stack direction={{ xs: 'column', sm: 'column' }} spacing={3}>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h4" fontWeight={800} gutterBottom>
                                    {project.title}
                                </Typography>
                                {project.githubUrl && (
                                    <IconButton
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: 'primary.main',
                                            color: 'common.white',
                                            '&:hover': { bgcolor: 'orange.dark', color: 'common.white' },
                                            fontSize: 14,
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: 2,
                                            gap: 0.5,
                                            transition: 'background 0.2s, color 0.2s',
                                        }}
                                        aria-label="GitHub Repository"
                                        title="GitHub Repository"
                                        size="small"
                                    >
                                        {getIconElement(getIconConfig('github'), { size: 'small' })}
                                        <span style={{ fontWeight: 600, fontSize: 13 }}>Github</span>
                                    </IconButton>
                                )}
                            </Box>
                            {project.role && (
                                <Typography variant="body2"><strong>Role:</strong> {project.role}</Typography>
                            )}
                            {(project.startDate || project.endDate) && (
                                <Typography variant="body2" sx={{ mt: 0.5 }}>
                                    <strong>Dates:</strong> {project.startDate} – {project.endDate === null ? 'Present' : project.endDate}
                                </Typography>
                            )}
                        </Box>
                        {project.tech && project.tech.length > 0 && (
                            <Box>
                                <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>Technologies:</Typography>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    flexWrap="wrap"
                                    sx={{
                                        // Add vertical gap between rows of chips
                                        gap: '8px 8px'
                                    }}
                                >
                                    {project.tech.map((tech) => (
                                        <TechChip key={tech} name={tech} />
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </Stack>
                </Section>

                <Section title="Project Description">
                    <Typography variant="body1" color="text.primary">
                        {project.full_description || project.short_description}
                    </Typography>
                </Section>

                {project.what_i_worked_on_arr && project.what_i_worked_on_arr.length > 0 && (
                    <Section title="What Did I Do?">
                        <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                            {project.what_i_worked_on_arr.map((item, idx) => (
                                <li key={idx}><Typography variant="body2">{item}</Typography></li>
                            ))}
                        </Stack>
                    </Section>
                )}

                {project.challenges && project.challenges.length > 0 && (
                    <Section title="Challenges">
                        <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                            {project.challenges.map((challenge, idx) => (
                                <li key={idx}><Typography variant="body2">{challenge}</Typography></li>
                            ))}
                        </Stack>
                    </Section>
                )}

                {project.takeaways && project.takeaways.length > 0 && (
                    <Section title="Key Takeaways">
                        <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                            {project.takeaways.map((takeaway, idx) => (
                                <li key={idx}><Typography variant="body2">{takeaway}</Typography></li>
                            ))}
                        </Stack>
                    </Section>
                )}
            </CardContent>
        </Card>
    );
};

export default ProjectPageProfile;

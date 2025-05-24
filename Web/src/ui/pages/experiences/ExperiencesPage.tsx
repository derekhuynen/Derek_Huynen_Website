import React from 'react';
import { Box } from '@mui/material';
import experienceData from 'config/json/experience.json';
import type { Experience } from './components/ExperienceCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import PageLayout from '../../components/layouts/PageLayout';
import { RESUME_URL } from 'config/constants';


const ExperiencesPage: React.FC = () => {
    const experiences = experienceData as unknown as Experience[];

    return (
        <PageLayout
            title="Experience Timeline"
            description="Explore a curated timeline of my professional and personal projects, highlighting my experience in software development, AI, cloud, and more. Each project card details my role, technologies used, and key achievements."
            actions={
                <a
                    href={RESUME_URL}
                    download
                    style={{ textDecoration: 'none' }}
                >
                    <Box
                        component="span"
                        sx={{
                            display: 'inline-block',
                            px: 3,
                            py: 1.2,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            fontWeight: 600,
                            fontSize: '1rem',
                            boxShadow: 2,
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                            '&:hover': { bgcolor: 'primary.dark' },
                        }}
                    >
                        Download My Resume (PDF)
                    </Box>
                </a>
            }
        >
            <Box sx={{ mt: 4 }}>
                <ExperienceTimeline experiences={experiences} />
            </Box>
        </PageLayout>
    );
};

export default ExperiencesPage;

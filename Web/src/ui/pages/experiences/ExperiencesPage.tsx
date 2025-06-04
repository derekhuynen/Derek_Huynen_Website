import React from 'react';
import { Box } from '@mui/material';
import experienceData from 'config/json/experience.json';
import type { Experience } from './components/ExperienceCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import PageLayout from '../../components/layouts/PageLayout';
import { WEBSITE_INFO } from 'config/constants';
import DownloadResume from 'ui/components/resume/DownloadResume';


const ExperiencesPage: React.FC = () => {
    const experiences = experienceData as unknown as Experience[];

    return (
        <PageLayout
            title={WEBSITE_INFO.experiences_page.title}
            description={WEBSITE_INFO.experiences_page.description}
            actions={
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <DownloadResume />
                </Box>
            }
        >
            <Box sx={{ mt: 4 }}>
                <ExperienceTimeline experiences={experiences} />
            </Box>
        </PageLayout>
    );
};

export default ExperiencesPage;

import React from 'react';
import { Box } from '@mui/material';
import ProjectGridCard from './ProjectGridCard';
import type { Project } from 'types/Project';


interface ProjectsGridProps {
    projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => (
    <Box sx={{ mt: 4 }}>
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)'
                },
                gap: { xs: 3, md: 4 },
                justifyContent: 'center',
                justifyItems: 'center',
                maxWidth: '1280px',
                mx: 'auto'
            }}
        >
            {projects.map((project, idx) => (
                <ProjectGridCard key={project.title + idx} {...project} />
            ))}
        </Box>
    </Box>
);

export default ProjectsGrid;

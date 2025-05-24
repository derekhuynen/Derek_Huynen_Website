import React, { useState } from 'react';
import projectsData from 'config/json/projects.json';
import PageLayout from '../../components/layouts/PageLayout';
import ProjectsFilter from './components/ProjectsFilter';
import ProjectsGrid from './components/ProjectsGrid';
import type { Project } from 'types/Project';



const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>(projectsData as Project[]);

    return (
        <PageLayout
            title="Projects"
            description="Explore a curated collection of my software, AI, and web development projects. Use the search and filter options below to find projects by technology or keyword."
        >
            <ProjectsFilter
                allProjects={projectsData as Project[]}
                setProjects={setProjects}
            />
            <ProjectsGrid projects={projects} />
        </PageLayout>
    );
};

export default ProjectsPage;

import React, { useState } from 'react';
import projectsData from 'config/json/projects.json';
import personalProjectsData from 'config/json/personal_projects.json';
import PageLayout from '../../components/layouts/PageLayout';
import ProjectsFilter from './components/ProjectsFilter';
import ProjectsGrid from './components/ProjectsGrid';
import type { Project } from 'types/Project';
import { WEBSITE_INFO } from 'config/constants';



const ProjectsPage: React.FC = () => {
    // Sort allProjects by startDate descending (most recent first)
    const allProjects = [...projectsData, ...personalProjectsData].sort((a, b) => {
        const aDate = a.startDate ? new Date(a.startDate) : new Date(0);
        const bDate = b.startDate ? new Date(b.startDate) : new Date(0);
        return bDate.getTime() - aDate.getTime();
    });
    const [projects, setProjects] = useState<Project[]>(allProjects);

    return (
        <PageLayout
            title={WEBSITE_INFO.projects_page.title}
            description={WEBSITE_INFO.projects_page.description}
            showDownloadButton={true}
        >
            <ProjectsFilter
                allProjects={allProjects}
                setProjects={setProjects}
            />
            <ProjectsGrid projects={projects} />
        </PageLayout>
    );
};

export default ProjectsPage;

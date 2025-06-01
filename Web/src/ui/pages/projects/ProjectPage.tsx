import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from 'config/json/projects.json';
import personalProjectsData from 'config/json/personal_projects.json';
import NotFoundPage from 'ui/components/boundaries/NotFoundPage';
import type { Project } from 'types/Project';
import ProjectPageProfile from './components/ProjectPageProfile';
import PageLayout from '../../components/layouts/PageLayout';

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Search both JSONs for the project by id
    const project = React.useMemo(() => {
        return (
            projectsData.find((p: Project) => p.id === id) ||
            personalProjectsData.find((p: Project) => p.id === id)
        );
    }, [id]);

    if (!project) return <NotFoundPage />;
    return (
        <PageLayout>
            <ProjectPageProfile project={project} />
        </PageLayout>
    );
};

export default ProjectPage;

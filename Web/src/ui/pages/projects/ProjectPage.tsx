import projectsData from 'config/json/projects.json';
import personalProjectsData from 'config/json/personal_projects.json';
import NotFoundPage from 'ui/components/boundaries/NotFoundPage';
import type { Project } from 'types/Project';
import PageLayout from '../../components/layouts/PageLayout';
import ProjectPageProfile from './components/ProjectPageProfile';
import { useParams } from 'react-router-dom';
import React from 'react';



const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Combine both project arrays and find by id in a single pass
    const project = React.useMemo(() => {
        return [...projectsData, ...personalProjectsData].find((p: Project) => p.id === id);
    }, [id]);

    if (!project) return <NotFoundPage />;
    return (
        <PageLayout>
            <ProjectPageProfile project={project} />
        </PageLayout>
    );
};

export default ProjectPage;

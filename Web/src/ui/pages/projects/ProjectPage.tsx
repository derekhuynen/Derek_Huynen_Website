import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from 'config/json/projects.json';
import personalProjectsData from 'config/json/personal_projects.json';
import NotFoundPage from 'ui/components/boundaries/NotFoundPage';
import type { Project } from 'types/Project';
import PageLayout from '../../components/layouts/PageLayout';

// Lazy load the heavy profile component
const ProjectPageProfile = lazy(() => import('./components/ProjectPageProfile'));

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
            <Suspense fallback={<div style={{ textAlign: 'center', marginTop: 40 }}>Loading project...</div>}>
                <ProjectPageProfile project={project} />
            </Suspense>
        </PageLayout>
    );
};

export default ProjectPage;

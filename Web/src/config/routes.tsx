import type { RouteObject } from 'react-router-dom';
import MainLayout from 'ui/components/layouts/MainLayout';
import { APPLICATION } from './constants';
import NotFoundPage from 'ui/components/boundaries/NotFoundPage';

const myRoutes: RouteObject[] = [
    {
        path: APPLICATION.Home.route,
        element: <MainLayout />,
        children: [
            {
                path: APPLICATION.Home.route,
                lazy: async () => {
                    const Component = await import('ui/pages/home/HomePage');
                    return { Component: Component.default };
                },
            },
            {
                path: APPLICATION.Projects.route,
                lazy: async () => {
                    const Component = await import('ui/pages/projects/ProjectsPage');
                    return { Component: Component.default };
                },
            },
            {
                path: '/projects/:id',
                // element: <ProjectPage />
                lazy: async () => {
                    const Component = await import('ui/pages/projects/ProjectPage');
                    return { Component: Component.default };
                },
            },
            {
                path: APPLICATION.Experiences.route,
                lazy: async () => {
                    const Component = await import('ui/pages/experiences/ExperiencesPage');
                    return { Component: Component.default };
                },
            }, {
                path: APPLICATION.Contact.route,
                lazy: async () => {
                    const Component = await import('../ui/pages/contact_me/ContactMePage');
                    return { Component: Component.default };
                },
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
];

export default myRoutes;

import React from 'react';
export interface Route {
    title: string;
    to: string;
    component: Function;
}
const routes: Route[] = [
    {
        title: 'Search Gifs',
        to: '/',
        component: React.lazy(() => import('../../components/routes/searchRoute/searchRoute')),
    },
    {
        title: 'Favorites',
        to: '/favorites',
        component: React.lazy(() => import('../../components/routes/favoritesRoute/favoritesRoute')),
    },
];

export default routes;
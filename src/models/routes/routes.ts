import React from 'react';
import IRoute from '../../ts/route.interface';

const routes: IRoute[] = [
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
import React from 'react';

const Home = React.lazy(() => import('Modules/Operation/containers/Home'));
const Products = React.lazy(() => import('Modules/Operation/containers/Products'));
const About = React.lazy(() => import('Modules/Operation/containers/About'));

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/products',
        exact: false,
        component: Products
    },
    {
        path: '/about',
        exact: false,
        component: About
    }
];

export default routes;
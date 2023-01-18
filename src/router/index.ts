import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Tasks from '../views/Tasks.vue';
import Projects from '../views/Projects.vue';
import Categories from '../views/Categories.vue';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tasks',
        component: Tasks
    },

    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },

    {
        path: '/categories',
        name: 'categories',
        component: Categories
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
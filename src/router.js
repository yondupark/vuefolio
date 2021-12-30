import { createWebHashHistory, createRouter } from "vue-router";
import Home from './components/Home';
import boardList from './components/Board/boardList';
import boardDetail from './components/Board/boardDetail';
import Career from './components/Career';
import Review from './components/Review';
import error from './components/e404';

const routes = [
    {path: "/",component: Home},
    {path: "/Myworks",component: boardList},
    {path: "/Career",component: Career},
    {path: "/Review",component: Review},
    {path: "/detail/:id(\\d+)",component: boardDetail,name: 'boardDetail'},
    {path: "/:anything(.*)",component: error}
];

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
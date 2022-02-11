import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home';
import boardList from './components/Board/boardList';
import boardDetail from './components/Board/boardDetail';
import boardWrite from './components/Board/boardWrite';
import Career from './components/Career';
import Review from './components/Review';
import error from './components/e404';
import FlowLife from './components/FlowLife';

const routes = [
    // {path: "/",component: intro},
    {path: "/",component: Home, meta: {title: 'Home'}},
    {path: "/Myworks",component: boardList, meta: {title: 'Myworks'}},
    {path: "/Career",component: Career},
    {path: "/Review",component: Review},
    {path: "/FlowLife",component: FlowLife},
    {path: "/detail/:id(\\d+)",component: boardDetail, name: 'boardDetail'},
    {path: "/Write",component: boardWrite},
    {path: "/:anything(.*)",component: error}
];

const router = createRouter({
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 200)
    })
  },
  history: createWebHistory(),
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
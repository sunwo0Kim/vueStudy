import { createWebHistory, createRouter } from "vue-router";
import PostList from './components/PostList.vue'
import MainHome from './components/MainHome.vue'
import PostDetail from './components/PostDetail.vue'

const routes = [
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/postlist",
    component: PostList,
  },
  {
    path: "/postdetail/:id",
    component: PostDetail,
    children: [
      {
        path: "/author",
        component: PostDetail,
      },
      {
        path: "/comment",
        component: PostDetail,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
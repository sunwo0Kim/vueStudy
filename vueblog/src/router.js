import { createWebHistory, createRouter } from "vue-router";
import PostList from './components/PostList.vue';
import MainHome from './components/MainHome.vue';
import PostDetail from './components/PostDetail.vue';
import BlogComment from './components/BlogComment.vue';
import AuthorName from './components/AuthorName.vue';

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
        path: "author",
        component: AuthorName,
      },
      {
        path: "comment",
        component: BlogComment,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
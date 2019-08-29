import Post from "./pages/Post.vue";
import Posts from "./pages/Posts.vue";
import PostCreate from "./pages/PostCreate.vue";

export default [
  {
    path: "/",
    redirect: {
      name: "posts"
    }
  },
  {
    name: "posts",
    path: "/posts",
    component: Posts
  },
  {
    name: "post",
    path: "/post/:id",
    component: Post
  },
  {
    name: "create",
    path: "/post/create",
    component: PostCreate
  }
];

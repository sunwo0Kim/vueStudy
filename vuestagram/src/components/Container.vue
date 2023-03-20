<template>
  <div>
    <Post :postdata="postdata"/>
    <!-- <Post />
    <Post /> -->
  </div>
</template>

<script>

import Post from './Post.vue'

export default {
  name: "App",
  components: {
    Post : Post
  },
  props : {
    postdata : Array,
  }
};
</script>
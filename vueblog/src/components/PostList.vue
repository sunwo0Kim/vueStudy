<template>
  <div v-for="(a,i) in blogData" :key="i">
      <h5>{{a.title}}</h5>
      <p>{{a.date}}</p>
  </div>
</template>

<script>
export default {
    name : 'PostList',
    props : {
        blogData : Array
    },
}
</script>

<style>

</style>
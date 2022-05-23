<template>
<div>
    <div v-for="(a,i) in blogData" :key="i">
        <h5 @click="$router.push('/postdetail/' + a.number)">{{a.title}}</h5>
        <!-- <router-link to="/postdetail/">{{a.title}}</router-link> -->
        <p>{{a.date}}</p>
    </div>
</div>

 

</template>

<script>


export default {
    name : 'PostList',
    data(){
        return {
            clickDetailURL : '',
            postNumber : 0
        }
    },
    props : {
        blogData : Array,
    },
    methods : {
        
    },
    components: {
        
    }
}
</script>

<style>

</style>
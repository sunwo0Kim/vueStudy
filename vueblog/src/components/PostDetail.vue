<template>
    <div>
        <h4>상세페이지입니다.</h4>
        
        <h5>{{blogData[$route.params.id].title}}</h5>
        <p>{{blogData[$route.params.id].content}}</p>
        
    </div>
</template>

<script>



export default {
    name: "PostDetail",
    props : {
        blogData : Array,
        postNumber : Number
    },
    methods : {
        test() {
            console.log(this.postNumber);
        }
    }
}
</script>

<style>

</style>
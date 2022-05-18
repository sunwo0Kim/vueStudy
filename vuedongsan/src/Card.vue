<template>

<div>
    <div v-for="(a,i) in roomdata" :key="i">
      <img :src="a.image" class = "room-img">
      <h4 @click="$emit('openModal',a.id)"> {{ a.title }} </h4>
      <p> {{ a.price }} </p>
    </div>
</div>
 
</template>

<script>
export default {
    name : 'Card',
    props : {
        roomdata : Array,
        clickData : Number,
    }
}
</script>

<style>
.room-img {
  width: 30%;
  margin-top: 40px;
}
</style>
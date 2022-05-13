<template>
  <div class = "black-bg" v-if="modal == true">
    <div class="white-bg">
      <img :src="roomdata[clickData].image" class = "room-img">
      <h4 >{{ roomdata[clickData].title }}</h4>
      <p>{{roomdata[clickData].content}} <br> {{roomdata[clickData].price}}</p>
      <!-- <button @click="modal = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
    name : 'ModalWindow',
    props : {
      roomdata : Array,
      modal : Boolean,
      clickData : Number
    }
}
</script>

<style>

</style>
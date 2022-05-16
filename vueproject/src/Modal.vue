<template>
  <div class = "black-bg" v-if="modal == true">
    <div class="white-bg">
      <img :src="roomdata[clickData].image" class = "room-img">
      <h4 >{{ roomdata[clickData].title }}</h4>
      <p>{{roomdata[clickData].content}}</p>
      <input v-model="month">
      <!-- <input @input="month = $event.target.value"> -->
      <p>{{month}}개월 선택함 : {{roomdata[clickData].price * month}}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'ModalWindow',
    data(){
      return {
        month : '',
      }
    },
    props : {
      roomdata : Array,
      modal : Boolean,
      clickData : Number
    }
}
</script>

<style>

</style>
<template>
  <div class = "black-bg" v-if="modal == true">
    <div class="white-bg">
      <img :src="roomdata[clickData].image" class = "room-img">
      <h4 >{{ roomdata[clickData].title }}</h4>
      <p>{{roomdata[clickData].content}}</p>
      <input v-model="month">
      <!-- <input @input="month = $event.target.value"> -->
      <input type="range" min="1" max="12">
      
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
        month : 1,
      }
    },
    watch : {
      month(a){
        let aNum = Number(a);
        
        if(Number.isNaN(aNum)) {
          alert('문자열은 입력할 수 없습니다.')
          this.month = 1;
        }
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
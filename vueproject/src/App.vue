<template>
  
  <ModalWindow :roomdata="roomdata" :clickData="clickData" :modal="modal"/>  
  
  <div class="menu">
    <a v-for="(a,i) in menus" :key="i">{{a}}</a>
  </div>
   
  <DiscountBanner/>
  
  <div v-for="(a,i) in roomdata" :key="i">
    <img :src="a.image" class = "room-img">
    <h4 @click="modal = true; clickData = i"> {{ a.title }} </h4>
    <p> {{ a.price }} </p>
  </div>

  
</template>

<script>

import onerooms from './data.js'
import DiscountBanner from './Discount.vue'
import ModalWindow from './Modal.vue'


export default {
  name: 'App',
  data(){ // 데이터 바인딩을 하는 이유 : HTML에 하드코딩 해놓으면 나중에 데이터 변경이 어렵다. + 실시간 자동 렌더링 가능
    return {
      clickData : 0,
      roomdata : onerooms,
      modal : false,
      menus : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸','천호동원룸','마포구원룸'],
      reportNum : [0],

      products_object : {
        '역삼동원룸' : '50만원',
        '천호동원룸' : '60만원',
        '마포구원룸' : '70만원',
      },
      anyPrice : '가격은아무거나',
    }
  },
  methods : {
    increase(num) { // data를 가져다 사용할 경우 this.을 반드시 붙여준다.
      console.log("test")
      num +=1;
      this.reportNum[0]=num;
      return this.reportNum[0];
      
    }
  },
  components: {
    DiscountBanner: DiscountBanner,
    ModalWindow: ModalWindow
}
}
</script>

<style>
body {
  margin : 0
}
div {
  box-sizing: border-box;
}



.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  margin-top: 0px;
  position: fixed; padding:20px;
}

.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 30%;
  margin-top: 40px;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>

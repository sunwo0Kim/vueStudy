<template>
  <div>
    <transition name="fade">
      <ModalWindow @closeModal = "modal = false;" :roomdata="roomdata" :clickData="clickData" :modal="modal"/>  
    </transition>
      
    <div class="menu">
      <a v-for="(a,i) in menus" :key="i">{{a}}</a>
    </div>
    
    <DiscountBanner :discountRate="discountRate"/>

    <button @click="priceSort">가격순정렬</button>
    <button @click="idSort">이름순정렬</button>
    <button @click="sortBack">되돌리기</button>
    
    
    <Card @openModal="modal = true; clickData = $event" :roomdata="roomdata" :clickData="clickData"/>
    <!-- <div v-for="(a,i) in roomdata" :key="i">
      <img :src="a.image" class = "room-img">
      <h4 @click="modal = true; clickData = i"> {{ a.title }} </h4>
      <p> {{ a.price }} </p>
    </div> -->

  </div>

  
</template>

<script>

import onerooms from './data.js'
import DiscountBanner from './Discount.vue'
import ModalWindow from './Modal.vue'
import Card from './Card.vue'


export default {
  name: 'App',
  data(){ // 데이터 바인딩을 하는 이유 : HTML에 하드코딩 해놓으면 나중에 데이터 변경이 어렵다. + 실시간 자동 렌더링 가능
    return {
      discountRate : 30,
      showDiscount : true,
      clickData : 0,
      roomdata : onerooms,
      roomdataOrigin : [...onerooms],
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
      
    },
    priceSort(){
      this.roomdata.sort(function(a,b){
        return b.price - a.price;
      });
    },
    idSort(){
      this.roomdata.sort(function(a,b){
        return a.title.localeCompare(b.title);
      });
    },
    sortBack(){
      this.roomdata = [...this.roomdataOrigin];
    }
  },

  mounted() {
    setInterval(()=>{ // Arrow function
      if(this.discountRate > 0) { this.discountRate -= 1; }
    }, 1000);
  },

  components: {
    DiscountBanner: DiscountBanner,
    ModalWindow: ModalWindow,
    Card: Card
  }
}
</script>

<style>
/* .start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
} */

.fade-enter-from {
  transform: translateY(-1000px);
} /*애니메이션 시작*/
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
} /*애니메이션 시작*/

.fade-leave-from {
  opacity : 1;
} /*애니메이션 시작*/
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
} /*애니메이션 시작*/


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

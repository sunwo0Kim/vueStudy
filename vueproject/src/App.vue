<template>

  <div class="menu">
    <a v-for="(a,i) in menus" :key="i">{{a}}</a>
  </div>

  <div>
    <h4 v-for="(b,j) in products_object" :key="j">{{ j }}  {{ b }}</h4> 
    <p> 50 만원 </p>
  </div>
  <div>
    <h4> {{ products[1] }} </h4>
    <p> {{ anyPrice }} </p>
  </div>
  <div>
    <h4> {{ products[2] }} </h4>
    <p> {{ anyPrice }} </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){ // 데이터 바인딩을 하는 이유 : HTML에 하드코딩 해놓으면 나중에 데이터 변경이 어렵다. + 실시간 자동 렌더링 가능
    return {
      menus : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸','천호동원룸','마포구원룸'],

      products_object : {
        '역삼동원룸' : '50만원',
        '천호동원룸' : '60만원',
        '마포구원룸' : '70만원',
      },
      anyPrice : '가격은아무거나',
    }
  },
  components: {
    
  }
}
</script>

<style>
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

<template>

<div v-if="openModal == true">
  <transition name="fade">
    <DateCalendar @closeModal="openModal = false" :clickDate="clickDate" :inputTask="inputTask" :nowTasks="nowTasks"/>
  </transition>
  
</div>

<div class = "headline">
  <h1>MyToDoList</h1>
</div>

<div class = "greeting">
  <p>Good morning!</p>
  <h4>You've got <br> {{nowTasks.length}} tasks</h4>
</div>

<div class = "inputBox">
  <input v-model = "inputTask" placeholder="Enter the task" 
  style="height:50px;font-size:50px;margin-left:-200px;width:990px;"
  @keyup.enter="openModal = true">
</div>

<!-- 임시 콘솔 -->
<div>
  {{clickDate}}
  {{inputTask}}
  {{nowTasks}}
</div>

<div class = "taskBox" v-if = "nowTasks != ''">
  <p v-for="(a,i) in nowTasks" :key="i">
    {{ nowTasks[i] }}
  </p>
</div>




</template>

<script>

import DateCalendar from './components/DateCalendar.vue'

export default {
  name: 'App',
  data() {
    return {
      inputTask : "",
      nowTasks : [],
      openModal : false,
      clickDate : []
    }
  },
  components: {
    DateCalendar: DateCalendar,
},
  methods: {
    // addTask(inputTask) {
    //   console.log(inputTask);
    //   this.nowTasks.push(inputTask,this.clickDate[0])
    //   this.inputTask = "";
    //   this.clickDate = [];      
    // },
    updateClickDate(clickDateFromCalendar) {
      this.clickDate = clickDateFromCalendar;
      console.log(this.clickDate);
    }
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.headline {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size:30px;
  /* color: rgb(197, 48, 48); */
  color : black;
  text-align: left;
  padding-left: 20px;
  padding-top: 0px;
  margin-top: 0px;
}

.greeting {
  color: black;
  text-align: left;
  padding-left: 20px;
}

/* input 박스 추가 후 구현 */
.inputBox { 
  /* background-color: white; */
  border-style :solid;
  border-width: 2px thin;
  border-color: red;
  border-radius: 5px;
  padding-left : 200px;
  width : 1000px;
  margin : 0 auto;
  
} 

.taskBox {
  border-style :solid;
  border-width: 1px thin;
  border-color: black;
  border-radius: 5px;
  width : 1500px;
  height : 800px;
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





</style>

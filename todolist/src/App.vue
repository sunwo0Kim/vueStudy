<template>

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
  @keyup.enter="addTask(inputTask)">
</div>

<div class = "taskBox" v-if = "nowTasks != ''">
  <p v-for="(a,i) in nowTasks" :key="i">
    {{ nowTasks[i] }}
  </p>
</div>

<!-- <VDatePicker
  locale="en"
  title-position="left"
  color="gray"
  v-model="endDate"
  @input="clickEndDate()"
  :model-config="modelConfig"
  is-required
  :style="{display:isShowendCalendar}"
  style="z-index:1"
/> -->

</template>

<script>

// import DatePick from 'vue-date-pick';
// import VDatePicker from '../../node_modules/v-calendar/lib/components/date-picker.umd';

export default {
  name: 'App',
  data() {
    return {
      inputTask : "",
      nowTasks : [],
    }
  },
  components: {
    
  },
  methods: {
    addTask(inputTask) {
      this.nowTasks.push(inputTask)
      this.inputTask = ""      
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





</style>

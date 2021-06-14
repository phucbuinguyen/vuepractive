<template>
  <div id="app">
    <TodolistBtn />
    <form class="assTaskFrm" @submit="addTask">
      <input type="text" name="title" placeholder="Add Task" v-model="title" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
//import uuid from "uuid";
import TodolistBtn from "./TodolistBtn.vue";
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
    };
  },
  components: {
    TodolistBtn,
  },
  methods: {
    addTask(event) {
      event.preventDefault();

      const newTodo = {
        //id: uuid.v4(),
        title: this.title,
        completed: false,
      };

      // Send up to parent
      //this.$emit("add-task", newTodo);
      console.log("sdf");
      //if you want to send any data into server before redirection then you can do it here
      //this.$router.push("/" + newTodo);
      this.$router.push({ name: "view", params: { newTodo } });
      // CLear
      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

.assTaskFrm .btn {
  margin-left: 24px;
  background-color: #dd50ae;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>
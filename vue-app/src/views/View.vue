<template>
  <div id="app">
    <Header />

    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos";

import axios from "axios";

export default {
  name: "View",
  components: {
    Todos,
  },
  data() {
    return {
      slug: this.$route.params.newTodo,
      todos: [],
    };
  },

  methods: {
    async deleteTodo(id) {
      try {
        const res = await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo(newTodo) {
      try {
        const { title, completed } = newTodo;
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          {
            title,
            completed,
          }
        );

        this.todos = [...this.todos, res.data];
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    console.log("slug: " + this.slug);
    this.addTodo(this.slug);
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      this.todos = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

//console.log($route.query);
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
</style>

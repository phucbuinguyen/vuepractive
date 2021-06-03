<template>
  <div id="app">
    <Header />

    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import store from "@/store";
import axios from "axios";

export default {
  name: "View",
  components: {
    Todos,
  },
  data() {
    return {
      slug: this.$route.params.newTodo,
      store,
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
    if (this.slug != null) {
      this.addTodo(this.slug);
    }
    try {
      console.log("store.localStore: " + store.localStore);
      const res = await axios.get(
        "https://60b87598b54b0a0017c039fe.mockapi.io/store"
      );
      //const res = store.localStore;
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

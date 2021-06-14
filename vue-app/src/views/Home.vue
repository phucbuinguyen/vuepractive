<template>
  <div id="app">home</div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import View from "./View";

import axios from "axios";

export default {
  name: "Home",
  components: {},
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

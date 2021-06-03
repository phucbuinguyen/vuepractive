<template>
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <input
      type="checkbox"
      v-on:change="markComplete"
      @click="$emit('mark-completed', todo.id)"
    />
    {{ todo.title }}
    <li id="btnWrap">
      <button class="btnEdit" @click="$emit('edit-todo', todo.id)">Edit</button>
      <button class="btnDel" @click="$emit('del-todo', todo.id)">Delete</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
li {
  list-style-type: none;
}
.is-complete {
  text-decoration: line-through;
}
#btnWrap {
  float: right;
}
.btnDel {
  background: #dd50ae;
  color: #fff;
  border: none;
  padding: 5px 9px;

  cursor: pointer;
}

.btnEdit {
  background: #dd50ae;
  color: #fff;
  border: none;
  padding: 5px 9px;
  margin-right: 12px;
  cursor: pointer;
}
</style>
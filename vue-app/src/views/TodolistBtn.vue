<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            tag="li"
            class="nav-link"
            active-class="active"
            exact
            to="/"
            >All Task</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            tag="li"
            class="nav-link"
            active-class="active"
            to="/addpage"
            >Add Task</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            tag="li"
            class="nav-link"
            active-class="active"
            to="/completed"
            >Completed</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            tag="li"
            class="nav-link"
            active-class="active"
            to="/trash"
            >Trash</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
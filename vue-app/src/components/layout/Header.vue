<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Cyberlogitec</a>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              tag="li"
              class="nav-link"
              active-class="active"
              exact
              to="/"
              >TodoList</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              tag="li"
              class="nav-link"
              active-class="active"
              to="/counter"
              >Countdown</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background: rgb(106, 173, 106);
  color: #fff;
  text-align: center;
  padding: 10px 10px 10px 10px;
}

.header a {
  color: rgb(69, 165, 40);

  text-decoration: none;
}

li.nav-link.router-link-exact-active.active {
  background-color: rgb(79, 221, 86);
}
</style>
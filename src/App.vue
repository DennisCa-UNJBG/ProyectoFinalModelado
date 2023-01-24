<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Proyecto de Modelado Computacional</h1>

      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/interpolacion">Interpolación Computacional</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin: 1rem;
}
h1 {
  margin-top: 2rem;
  text-align: center;
}

nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>

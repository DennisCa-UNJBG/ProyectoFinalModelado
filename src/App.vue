<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">about</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/lagrange">lagrange</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/newton">Newton</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/mincuadrados">Mínimos Cuadrados</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/lineal">Lineal</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/trapecio">Trapecio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/simpson">Simpson</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <RouterView />
</template>

<style scoped>
</style>

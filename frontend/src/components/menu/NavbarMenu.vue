<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Registro</router-link></li>
        <!-- Adicione mais links conforme necessário -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarMenu'
  }
  </script>
  
  <style>
    /* Estilize seu menu aqui */
    nav {
      /* Estilos do menu */
    }
    ul {
      /* Estilos da lista */
    }
    li {
      /* Estilos dos itens da lista */
    }
  </style>
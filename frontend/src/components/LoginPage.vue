
<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  

  <script>
  import api from '@/services/api';
  
  export default {
    methods: {
      async login() {
        try {
          const response = await api.post('/token/', {
            username: this.username,
            password: this.password,
          });
  
          // Lógica para lidar com a resposta da API (por exemplo, armazenar o token JWT)
          const token = response.data.token;
          // Implemente a lógica de armazenamento ou uso do token conforme necessário
          this.$cookies.set('authToken', token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // Exemplo: cookie válido por 1 semana
            httpOnly: true,
        });
  
          // Pode redirecionar para a próxima página após a autenticação
        } catch (error) {
          console.error('Erro ao fazer login:', error);
          // Lógica para lidar com erros de autenticação
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 5px;
  }
  
  button {
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>

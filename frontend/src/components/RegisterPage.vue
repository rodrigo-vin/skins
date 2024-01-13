<template>
    <div class="register-container">
      <h1>Cadastro</h1>
      <form @submit.prevent="register">
        <label for="username">Nome de Usuário:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    // restante do seu código Vue.js
    methods: {
      async register() {
        try {
          const response = await api.post('/api/registro', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
  
          console.log('Resposta da API:', response.data);
          // Pode redirecionar para a próxima página após o registro, se necessário
        } catch (error) {
          console.error('Erro no registro:', error);
          // Lógica para lidar com erros de registro
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    margin: auto;
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  label {
    font-weight: bold;
    color: #555;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
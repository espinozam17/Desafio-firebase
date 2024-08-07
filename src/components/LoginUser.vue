<template>
  <div class="register-container">
    <h2>Login</h2>
    <div class="input-group">
      <label for="email"><span class="icon">📧</span> Email :</label>
      <input v-model="email" type="email" placeholder="Ingrese su correo" id="email" />
    </div>
    <div class="input-group">
      <label for="password"><span class="icon">🔒</span> Contraseña :</label>
      <input
        v-model="password"
        type="password"
        placeholder="Ingrese su contraseña"
        id="password"
      />
    </div>
    <button @click="login({ email, password })">Inicia Sesion</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginUser",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: auto;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  width: 100%;
  margin-bottom: 15px;
}

label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}

.icon {
  margin-right: 8px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.terms {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 10px 0;
}

.terms input {
  margin-right: 5px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

.signin-link {
  margin-top: 10px;
  font-size: 12px;
  color: #333;
}

.signin-link a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

.signin-link a:hover {
  text-decoration: underline;
}
</style>

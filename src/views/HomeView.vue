<template>
  <div class="home">
    
    <h2>Home</h2>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/disc02.png');
  background-size: contain; /* Ajusta el tamaño de la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen */

  font-family: 'Arial', sans-serif;
  color: white;
}


</style>

<template>
  <div class="container">
    <nav class="header">
      <button>Menu</button>
      <h1>Vladislav Lukinov</h1>
      <button>Contacts</button>
    </nav>
    <div class="image-container">
      <img src="../assets/masha.jpeg"/>
      <img src="../assets/katya.jpeg"/>
    </div>
    <router-link to='/albums' class="bottom-button">
      <img src="../assets/arrow-bottom.svg"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainPage"
};
</script>

<style scoped>
.container {
  height: 100%;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
}

.header button {
  padding: 0 16px;
  border: none;
  background: none;
  color: white;
  font-family: "Abril Fatface";
  font-size: 24px;
}

.header h1 {
  margin: 0;
  color: white;
  font-size: 48px;
}

.image-container {
  height: 100%;
  display: flex;
}

.image-container img {
  flex: 1;
  max-width: 100%;
  object-fit: cover;
}

.bottom-button {
  position: absolute;
  left: 50%;
  bottom: 16px;
  padding: 8px 16px;
  transform: translateX(-50%);
}
</style>

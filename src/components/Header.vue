<script setup></script>

<template>
  <div class="header">
    <div class="logo">
      <img
        src="https://ih1.redbubble.net/image.1116246045.7151/flat,750x1000,075,f.jpg"
        class="logo"
        alt="oui"
        width="300"
        height="300"
      />
    </div>
    <div class="menu">
      <router-link tag="liens" to="/">acceuil</router-link>
      <router-link tag="liens" to="/apropos">à propos</router-link>
      <router-link tag="liens" to="/Shop">Shop</router-link>
      <router-link tag="liens" to="/contact">contact</router-link>
      <router-link tag="liens" to="/message">message</router-link>
    </div>
  </div>
</template>
<style>
.header {
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.menu {
  padding-top: 13px;
  display: flex;
  flex-direction: row;
  gap: 60px;
  font-size: 18px;
  padding-right: 30px;
}
.menu a {
  color: white;
}
.logo {
  padding-right: 20px;
  width: 90px;
  height: 70px;
  padding-left: 20px;
}
</style>

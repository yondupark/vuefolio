<template>
    <nav id="nav" class="flexbox">
      <div class="logo">
        <router-link to="/" class="logoico">
          <span class="__hidden">PortFolio</span>
        </router-link>
      </div>
      <div class="menus">
        <router-link to="/">Home</router-link>
        <router-link to="/Myworks">Myworks</router-link>
        <router-link to="/Career">Career</router-link>
        <router-link to="/Review">Review</router-link>
        <button class="button contact">Contact</button>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Header'
};
</script>

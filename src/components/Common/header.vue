<template>
    <nav id="nav" class="flexbox">
      <div class="logo">
        <router-link to="/" class="logoico">
          <span class="__hidden">PortFolio</span>
        </router-link>
      </div>
      <div class="menus">
        <router-link to="/Myworks">My Works</router-link>
        <router-link to="/Career">Career</router-link>
        <router-link to="/Review">Review</router-link>
        <button class="button contact" @click="modal = true;">Contact</button>
      </div>
    </nav>


    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <h4>모달창</h4>
        <p>만들기</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        modal : false,
      }
    }
  }
</script>

<style lang="scss">

</style>
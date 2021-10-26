<template>
  <div class="vue-container">
    <nav id="nav" class="flexbox">
      <div class="logo">
        <router-link to="/" class="logoico">PortFolio</router-link>
      </div>
      <div class="menus">
        <router-link to="/">Home</router-link>
        <router-link to="/ListUps">ListUps</router-link>
      </div>
    </nav>
    <section class="pageContens">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </section>
  </div>
</template>

<style lang="scss">
/* Router page Transition */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .75s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateY(20vw);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .75s ease;
}

.slide-fade-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
<template>
  <div class="vue-container">
    <nav id="nav" class="flexbox">
      <div class="logo">
        <router-link to="/" class="logoico">S.W__Portfolio</router-link>
      </div>
      <div class="flexbox">
        <router-link to="/">Home</router-link>
        <router-link to="/Portfolios">Portfolios</router-link>
        <router-link to="/Listsup">Lists Up</router-link>
        <router-link to="/WhoamI">Whoami</router-link>
        <router-link to="/Guide">Guide</router-link>
        <div>
          <label class="darkmode-toggle" for="toggle-checkbox">
              <span class="__hidden">Enable dark mode</span>
              <input type="checkbox" id="toggle-checkbox" />
              <span class="toggle-slider" aria-hidden="true"></span>
          </label>
        </div>
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
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}


.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>

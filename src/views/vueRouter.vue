<template>
  <div class="vue-container">
    <nav id="nav" class="flexbox">
      <div class="logo">
        <router-link to="/" class="logoico">
          <span class="__hidden">PortFolio</span>
        </router-link>
      </div>
      <div class="menus">
        <router-link to="/">Home</router-link>
        <router-link to="/Myworks">ListUps</router-link>
        <router-link to="/Career">Career</router-link>
        <router-link to="/Design">Design</router-link>
        <router-link to="/Review">Review</router-link>
        <button class="button contact">Contact</button>
      </div>
    </nav>


    <section class="pageContens">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </section>

    <footer>
      @ 2021 by S.W.Park. Designed by Me.
    </footer>
  </div>
</template>

<style lang="scss">

#nav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    z-index: 999;
    padding: 2rem;
    font-size: 1.6rem;
    @include flexbox;
    a {
        display: block;
        margin: 0 1rem;
        padding: 1rem;
        color: $textColor;
        font-weight: 500;
        text-decoration: none;
        &.router-link-exact-active {
            color: $pointColor;
        }
    }
    a.logoico {
      padding-left: 4.8rem;
      color: $pointColor;
      font-size: 2rem;
      font-weight: 700;
    }
    .menus {
      @include flexbox;
    }
}
.logoico {
  display: block;
  width: 7.9rem;
  height: 4.5rem;
  background: url("../assets/images/logo.svg") no-repeat center center;
}

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
  transform: translateY(5vw);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .75s ease;
}

.slide-fade-leave-to {
  transform: translateY(-5vw);
  opacity: 0;
}
</style>

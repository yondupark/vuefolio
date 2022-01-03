<template>
  <div class="vue-container">
    <headerComp />

    <section class="pageContens">
      <transition :name="fade" mode="out-in">
        <router-view :board="board"></router-view>
      </transition>
    </section>

    <footer>
      @ 2021 by S.W.Park. Designed by Me.
    </footer>
  </div>
</template>

<script>
import headerComp from './components/Common/header'
import boardData from './components/Board/boarddata.js';

export default {
  name: 'S.W.Vuefolio',
  data() {
    return {
      board: boardData,
    }
  },
  components: {
    headerComp
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: .5s ease all;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
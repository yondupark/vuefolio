<template>
  <div>
    <vueRouter/>
  </div>
</template>

<script>
import vueRouter from './views/vueRouter';

export default {
  name: 'VufolioApp',
  components: {
    vueRouter,
  }
};
</script>
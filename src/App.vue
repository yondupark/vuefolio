<template>
  <div>
    <vueRouter/>
    <Guide/>
  </div>
</template>

<script>
import vueRouter from './views/vueRouter';
import Guide from './views/Guide';

export default {
  name: 'VufolioApp',
  components: {
    vueRouter,
    Guide,
  }
};
</script>
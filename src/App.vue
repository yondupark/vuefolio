<template>
  <v-app>
    <Menubar/>
    <Guide/>
  </v-app>
</template>

<script>
import Menubar from './views/Menubar';
import Guide from './views/Guide';

export default {
  name: 'VufolioApp',

  components: {
    Menubar,
    Guide,
  }
};
</script>


<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
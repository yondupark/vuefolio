<template>
  <div>
    <Menubar/>
    <Guide/>
  </div>
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
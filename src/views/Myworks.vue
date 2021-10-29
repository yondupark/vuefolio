<template>
  <div class="container">
    <div class="portfolios">
      <div class="title_desc">
        <h2>My works</h2>
      </div>
      <local-component></local-component>
    </div>  
  </div>
</template>


<script>
import LocalComponent from './Components/works'

export default {
  name: 'My Works',
  components: { LocalComponent }
};
</script>

<template>
  <div class="container">
    <div class="portfolios">
      <div class="title_desc">
        <h2>My works</h2>
      </div>
      <MyWorks></MyWorks>
    </div>  
  </div>
</template>


<script>
import MyWorks from './Components/workLists'

export default {
  name: 'My Works',
  components: { MyWorks }
};
</script>

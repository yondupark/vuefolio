<template>
  <div>
      <div>
          <img :src="[board[$route.params.id].Image]" alt="">
      </div>
      <div>
        <h3>{{board[$route.params.id].Title}}</h3>
        <div>
            {{board[$route.params.id].Html}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'boardDetail',
    props: {
        board : Array
    }

}
</script>

<style>

</style>
<template>
  <div class="container -full">
    <h1 class="_hidden">게시판 상세</h1>
    <button class="button">
      <span class="_hidden"> 뒤로가기 </span>
    </button>
    <div class="portfolios__title">
      <h2>{{ board[$route.params.id].From }}</h2>
      <h3>{{ board[$route.params.id].Title }}</h3>
    </div>
    <div class="portfolios__view">
      <div class="portfolios__img">
        <img :src="[board[$route.params.id].Image]" alt="" />
      </div>
      <div class="portfolios__desc">
        {{ board[$route.params.id].Html }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boardDetail",
  props: {
    board: Array,
  },
};
</script>
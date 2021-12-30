<template>
  <div class="container -full">
    <h1 class="__hidden">게시판 상세</h1>
    <div class="portfolios__title">
      <button class="button goback" @click="$router.go(-1)">
        <span class="__hidden"> 뒤로가기 </span>
      </button>
      <h2>{{ board[$route.params.id].From }}</h2>
      <h3>{{ board[$route.params.id].Title }}</h3>
    </div>
    <div class="portfolios__view">
      <div class="portfolios__img">
        <img :src="[board[$route.params.id].Image]" alt="" />
      </div>
      <div class="portfolios__desc">
        <!-- {{ board[$route.params.id].Html }} -->
        작업중
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

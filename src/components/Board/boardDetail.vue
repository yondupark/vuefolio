<template>
  <div class="container -full">
    <h1 class="__hidden">게시판 상세</h1>
    <div class="portfolios__title">
      <button class="button goback" @click="$router.go(-1)">
        <span class="__hidden"> 뒤로가기 </span>
      </button>
      <h2>{{ board[$route.params.id].Title }}</h2>
      <h3>{{ board[$route.params.id].From }}</h3>
    </div>
    <div class="portfolios__view">
      <div class="portfolios__img">
        <img :src="[board[$route.params.id].Image]" alt="" />
      </div>
      <div class="portfolios__desc">
        <div class="portfolios__contents">
          <ul class="ptf__list">
            <li>
              <span>발주처 :</span>
              <span>{{ board[$route.params.id].From }}</span>
            </li>
            <li>
              <span>소속사 :</span>
              <span>{{ board[$route.params.id].workedat }}</span>
            </li>
            <li>
              <span>참여율 :</span>
              <span>{{ board[$route.params.id].Percentage }} %</span>
            </li>
            <li>
              <span>주요업무 : </span>
              <div>
                {{ board[$route.params.id].Hash[0] }}
                {{ board[$route.params.id].Hash[1] }}
                {{ board[$route.params.id].Hash[2] }}
                {{ board[$route.params.id].Hash[3] }}
                {{ board[$route.params.id].Hash[4] }}
              </div>
            </li>
          </ul>
          <div>
              <span>작업내용 : </span>
              <div v-html="board[$route.params.id].Html"></div>
          </div>
        </div>
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
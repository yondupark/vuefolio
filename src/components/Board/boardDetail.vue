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
              <span>참여율 :</span>
              <span>{{ board[$route.params.id].Percentage }} %</span>
            </li>
            <li>
              <span>주요업무 : </span>
              <div class="flexbox">
                <span v-for="(Hashesh, idx) in board[$route.params.id].Hash" :key="idx" class="hash">
                  {{ Hashesh }}
                </span>
              </div>
            </li>
            <li>
              <span class="descriptiontitle">작업내용 : </span>
              <div v-html="board[$route.params.id].Html" class="description"></div>
            </li>
            <li>
              <span>파일링크</span>
              <ul class="flexbox links">
                <li v-for="(links, idx) in board[$route.params.id].links" :key="idx" class="links">
                  <!-- <a :href="links" target="_blank">Link #{{ idx }}</a> -->
                  <a :href="links">Link #{{ idx + 1 }}</a>
                </li>
              </ul>
            </li>
            <li>
              <span>실주소</span>
              <ul class="flexbox links">
                <li v-for="(links2, idx) in board[$route.params.id].curruntLinks" :key="idx" class="links2">
                  <a :href="links2" target="_blank">Link To</a>
                </li>
              </ul>
            </li>
          </ul>
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
  created() {
    document.title = "포트폴리오 소개";
  },
};
</script>
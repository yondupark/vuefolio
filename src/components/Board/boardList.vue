<template>
  <div class="container">
    <div class="portfolios">
      <div class="title_desc">
        <h2>My works</h2>
      </div>
      <Skeleton v-if="skull" />

      <ul class="v_listup" v-show="!skull">
        <li v-for="(board, idx) in board" :key="idx">
          <router-link :to="{ name: 'boardDetail', params: { id: idx } }">
            <div class="image">
              <img :src="`${board.Image}`" alt="" />
            </div>
            <div class="texts">
              <p class="title2">{{ board.Title }}</p>
              <h3 class="title">{{ board.From }}</h3>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Skeleton from "../Skeleton.vue";

export default {
  components: { Skeleton },
  name: "list",
  data() {
    return {
      skull: true,
    };
  },
  props: {
    board: Object,
  },
  methods: {},
  mounted() {
    console.log("스켈레톤 보여지는중");
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        console.log("이미지까지 로딩 완료되었습니다.");
        this.skull = !this.skull;
        console.log("스켈레톤 삭제 처리");
      }
    };
  },
};
</script>

<style scoped>
.v_listup {
  margin-top: 4rem;
}
.portfolios {
  min-height: 100vh;
}
.portfolios li {
  transition: 1s ease all;
  border: none;
}
.portfolios li img {
  transition: 1.5s ease all;
}
.portfolios ul li a .image {
  overflow: hidden;
}
.portfolios li:hover {
  transform: scale(1.1);
  z-index: 999;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}
.portfolios ul li a .texts {
  opacity: 0;
  position: absolute;
  bottom: -100%;
  left: 0;
  transition: 0.75s ease all;
  width: 100%;
  background: #0ec8b9;
  padding: 0.7rem 2rem;
}
.portfolios ul li:hover .texts {
  opacity: 1;
  bottom: 0;
}
.portfolios ul li h3,
.portfolios ul li p {
  color: #fff;
}
.portfolios ul li p {
  font-weight: 700;
}
</style>
<template>
  <div class="container">
    <div class="portfolios">
      <div class="title_desc">
        <h2>My works</h2>
        <!-- <router-link to="/Write" class="button write">
          <span class="__hidden"> viewmore </span>
        </router-link> -->

        <a href="javascript:alert('🙄로그인해주세요.')" class="button write">
          <span class="__hidden"> viewmore </span>
        </a>
      </div>
      <!-- 로딩 전 표시 -->
      <Skeleton v-if="loading == true" />
      <!-- // 로딩 전 표시 -->

      <!-- 렌더될 페이지 -->
      <ul class="v_listup" v-show="loaded">
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
      <!-- // 렌더될 페이지 -->
    </div>
  </div>
</template>

<script>
//import "./js/index";
import Skeleton from "../Skeleton.vue";

export default {
  components: { Skeleton },
  name: "list",
  data() {
    return {
      loading: true,
      loaded: false,
    };
  },
  props: {
    board: Object,
  },
  beforecreated() {
    console.log('beforecreated');
    document.title = "포트폴리오 소개";
  },
  mounted() {    
    console.log('mounted');
    setTimeout(() => {
      this.loading = false;
      this.loaded = true;
    }, 1500);
  },
  unmounted() {
    console.log('destroyed');
    this.loading == true;
    this.loaded == false;
  }
};
</script>

<style scoped>
.title_desc {
  margin-bottom: 4rem;
}
.portfolios {
  min-height: 100vh;
  padding-top: 13.5rem;
}
.portfolios li {
  transition: 1s ease all;
  border: none;
}
.portfolios li:hover a:before,
.portfolios li:hover a:after {
  transform: translate(0, 0);
}
.portfolios ul li a {
  position: relative;
  z-index: 1000;
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
.portfolios li .image img {
  transform: translate(-50%, 0);
}
.portfolios li:hover .image img {
  animation: viewall 3s ease both;
}
@keyframes viewall {
  from {
    transform: translate(-50%, 0);
  }
  to {
    transform: translate(-50%, -40%);
  }
}
.portfolios ul li a .texts {
  opacity: 0;
  position: absolute;
  bottom: -100%;
  left: 0;
  transition: 0.75s ease all;
  width: 100%;
  background: #0ec8b9;
  padding: 1.7rem 1.3rem 1.2rem;
  z-index: 999;
}
.portfolios ul li:hover .texts {
  opacity: 1;
  bottom: 0;
}
.portfolios ul li h3,
.portfolios ul li p {
  color: #fff;
}
.portfolios ul li h3 {
  font-size: 1.4rem;
  font-weight: 500;
}
.portfolios ul li p {
  font-size: 1.6rem;
  font-weight: 700;
}

@media screen and (max-width:480px) {
  .portfolios {
    padding-top: 3rem;
  }
  .portfolios ul {
    display: block;
  }
  .portfolios li {
    width: 100%;
  }
}
</style>
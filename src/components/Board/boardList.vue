<template>
  <div class="container">
    <div class="portfolios">
      <div class="title_desc">
        <h2>My works</h2>
      </div>


      <Skeleton v-if="loading == true" :loading="loading" />

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
      loading: true,
      loaded: false,
    };
  },
  props: {
    board: Object,
  },
  methods: {},
  created() {
    const readyHandler = () => {
      if (document.readyState == "complete") {
        this.loading = false;
        this.loaded = true;
        setTimeout(function() {
          document.removeEventListener("readystatechange", readyHandler);
        }, 11000)
      }
    };

    document.addEventListener("readystatechange", readyHandler);
    readyHandler();
  },
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

.portfolios li a:before, .portfolios li a:after {
  content: '';
  width:100%;
  height: 35rem;
  display: block;
  opacity: 0.2;
  background:#ffce2e;
  position: absolute;
  top:0;
  left: 0;
  z-index: 1;
  transform: translate(100%, 100%);
  transition: .3s ease all;
}
.portfolios li a:after {
  background:#ff8cc5;
  transition: .6s ease all;
}
.portfolios li:hover a:before, .portfolios li:hover a:after {
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
.portfolios ul li a .texts {
  opacity: 0;
  position: absolute;
  bottom: -100%;
  left: 0;
  transition: 0.75s ease all;
  width: 100%;
  background: #0ec8b9;
  padding: 0.7rem 2rem 0.2rem;
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
</style>
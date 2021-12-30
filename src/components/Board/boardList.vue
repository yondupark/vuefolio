<template>

  <div class="container">
    <div class="portfolios">
      <div class="title_desc">
        <h2>My works</h2>
      </div>
      <ul class="v_listup">
          <li v-for="(board, idx) in board" :key="idx">
            <router-link :to="{ name: 'boardDetail', params: { id: idx }}">
                <div class="image">
                    <img :src="`${board.Image}`" alt="">
                </div>
                <h3>{{board.Title}}</h3>
                <div class="texts">
                    <p class="title">{{ board.From }}</p>
                    <p class="title">{{ board.Title }}</p>
                </div>
            </router-link>
          </li>
      </ul>
    </div>  
  </div>
</template>

<script>
export default {
    name: 'list',
    props: {
        board : Array
    }
}
</script>

<style scoped>
.v_listup {
  margin-top: 4rem;
}
.portfolios {
  min-height: 100vh;
}
.portfolios li img {
  transition: 1.5s ease all;
}
.portfolios ul li a .image {
  overflow: hidden;
}
.portfolios li:hover {
  box-shadow: 0 0 30px 20px rgba(29, 117, 73, 0.35);
}
.portfolios li:hover img {
  transform: translateX(-50%) translateY(-5px) scale(1.5);
}
</style>
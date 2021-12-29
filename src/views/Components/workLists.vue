<template>
    <div>
        <ul class="v_listup">
            <li v-for="(user, idx) in listed" :key="idx" @click="readthis">
                <a href="#">
                <div class="image">
                    <img :src="`${user.Image}`" alt />
                </div>
                <div class="texts">
                    <p class="title">{{ user.From }} - {{user.Title}}</p>
                    <p class="hashes">
                    {{user.Hash[0]}}
                    {{user.Hash[1]}}
                    {{user.Hash[2]}}
                    {{user.Hash[3]}}
                    </p>
                </div>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'restful',
  data() {
    return {
      listed: null
    };
  },
  methods: {
    readthis() {
      console.log('얍! 내가 게시판 뷰로 이동해볼게');
    },
    fetchData() {
      axios
        .get("https://swvuefolio-default-rtdb.asia-southeast1.firebasedatabase.app/data.json")
        .then(res => {
          this.listed = res.data;
          this.listedHash = res.data.Hash;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchData();
  }
};
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
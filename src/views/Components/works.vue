<template>
    <div>
        <ul class="v_listup">
            <li v-for="(user, idx) in listed" :key="idx">
                <a href="#">
                <div class="image">
                    <img :src="`${user.Image}`" alt />
                </div>
                <div class="texts">
                    <p class="title">{{user.Title}}</p>
                    <p class="hashes">
                    {{user.Hash}}
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
  data() {
    return {
      listed: null
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://swvuefolio-default-rtdb.asia-southeast1.firebasedatabase.app/data.json")
        .then(res => {
          this.listed = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchData(this.pageNum);
  }
};
</script>
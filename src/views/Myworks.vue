<template>
  <div class="container">
    <div class="portfolios">
      <div class="title_desc">
        <h2>My works</h2>
      </div>
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
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      listed: null,
      numbers: 4
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

<style lang="scss" scoped>
.portfolios {
  @include contentsWrap;
  @include flexbox;
  max-width: 1025px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  h2 {
    @include texttype1;
    text-align:left;
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: -0.75px;
  }
  ul {
    @include flexbox;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    list-style: none;
    li {
      position: relative;
      width: 28.5rem;
      margin: 0;
      color: $textColor;
      background: #fff;
      box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      overflow: hidden;
      a {
        display: block;
        width: 100%;
        height: 100%;
        .image {
          overflow:hidden;
          width: 100%;
          height: 257px;
          border-radius: .6rem;
          transition: .2s ease all;
          img {
            display: block;
            position: relative;
            top: 50%;
            width: 100%;
            transform: translateY(-50%)
          }
        }
        .texts {
          padding: 2.4rem 1rem;
        }
        .title {
          width: 100%;
          @include texttype3;
          font-weight: 700;
          margin-bottom: .7rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .hashes {
          color: $pointColor;
          font-size: 1.2rem;
          font-weight: 700;
        }
      }
    }
    li {
      margin-right: 8.4rem;
      margin-bottom: 5rem;
    }
    li:nth-child(3n) {
      margin-right: 0;
    }

  }
}
</style>

<template>
  <div class="main">
    <div class="vueHome">
        <div>
          <h2>
            Hi.<br />
            I’m <span>SangWan Park.</span>
          </h2>
          <div> 
            <p>
              It’s what i’ve done from
              <span id="count" class="highlight">0</span>days ago.
            </p>
          </div>
          <router-link to="/Career"  class="button link">Career</router-link>
        </div>
        <div>
          <img src="../assets/images/bg_main.svg" alt="">
        </div>
    </div>


    <div class="portfolios">
      <div class="title_desc">
        <h2>
          My recent<br />
          works
        </h2>
        <p>Feel free to check my works out .</p>
      </div>

      <ul class="v_listup">
        <li v-for="(user, idx) in users" :key="idx">
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


    <div class="portfolios">
      <div class="title_desc">
        <h2>
          What I have &amp;<br />
          Interests
        </h2>
        <p>Feel free to check my works out .</p>
      </div>

      <ul class="list">
        <li>
          Based On
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Responsive</li>
            <li>Web Accessibility</li>
            <li>Javascript / JQuery</li>
            <li>Sass / Less</li>
            <li>Git</li>
            <li>Based On</li>
          </ul>

        </li>
        <li>
          Tools
          <ul>
            <li>VS Code</li>
            <li>Photoshop</li>
            <li>Zeplin</li>
            <li>Figma</li>
            <li>Adobe XD</li>
          </ul>
        </li>
        <li>
          Interests
          <ul>
            <li>React / Vue</li>
            <li>WebGL</li>
            <li>3D Modeling</li>
            <li>Interaction</li>
          </ul>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
import axios from "axios";

function calcdays() {
  var dday = new Date("08 01, 2013").getTime();
  var today = new Date().getTime();
  var gap = today - dday;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  document.getElementById("count").innerHTML = day;
}

export default {
  name: 'portfolios',
  data() {
    return {
      users: null,
      numbers: 4
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://swvuefolio-default-rtdb.asia-southeast1.firebasedatabase.app/data.json")
        .then(res => {
          this.users = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {
      calcdays(); //마운트가 완료되면 날짜를 삽입
  },
};
</script>


<style lang="scss" scoped>
.main {
  background:#F8FEFF;  
}
.vueHome {
  @include flexbox;
  @include contentsWrap;
  width: 102.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15.8rem 0 9.2rem;
  > div {
    text-align: left;
    h2 {
      margin-bottom: 1.6rem;
      font-size: 4rem;
      line-height: 100%;
      color: $textColor;
      span {
        color: $pointColor;
      }
    }
    p {
      font-size: 2.4rem;
      letter-spacing: -.75px;
      line-height: 1.4;
      margin-bottom: 3.2rem;
      .highlight {
        color: $pointColor;
        margin: 0 1rem;
        font-weight: 700;
      }
    }
    #count {
      margin: 2rem 0;
    }
  }
  .tools {
    margin-bottom: 3.5rem;
    ul {
      @include flexbox;
      justify-content: space-between;
      text-align: center;
      list-style: none;
      li {
        position: relative;
        width: 33.333%;
        color: $textColor;
        font-size: 2.8rem;
        font-weight: bold;
      }
      li + li:before {
        content: '+';
        display: block;
        position: absolute;
        top: 50%;
        left: -1rem;
        color: $textColor;
        transform: translateY(-50%);
      }
    }
    img {
      display: block;
      height: 14rem;
      margin: 0 auto 2.5rem;
    }
  }
}

.portfolios {
  @include contentsWrap;
  @include flexbox;
  width: 102.5rem;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  h2 {
    @include texttype1;
    text-align:left;
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: -0.75px;
    line-height: 1;
    margin-bottom: 1.4rem
  }
  ul {
    @include flexbox;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    list-style: none;
    height: 36rem;
    overflow: hidden;
    li {
      position: relative;
      width: 28.5rem;
      margin: 0;
      color: $pointColor;
      background: #fff;
      box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      overflow: hidden;
      margin-right: 8.4rem;
      margin-bottom: 5rem;
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
    li:nth-child(3n) {
      margin-right: 0;
    }

  }
}
</style>

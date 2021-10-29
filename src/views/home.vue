<template>
  <div class="main">
      <div class="vueHome">
        <div>
          <div>
            <h2>
              Hi.<br />
              I’m <span>SangWan Park.</span>
            </h2>
            <div> 
              <p>
                It’s what i’ve done from<br />
                <span id="count" class="highlight">0</span> days ago.
              </p>
              <p>
                It gotta be <span class="highlight">Fun</span>.<br />
                It gotta be  <span class="highlight">Cool</span>.<br />
                and you gotta be <span class="highlight">Sexy</span>. too.
              </p>
            </div>
            <router-link to="/Career"  class="button link">Career</router-link>
          </div>
          <div>
            <img src="../assets/images/bg_main.svg" alt="">
          </div>
        </div>
    </div>


    <div class="portfolios">
      <div>
        <div class="title_desc">
          <h2>
            My recent<br />
            works
          </h2>
          <p>Feel free to check my works out .</p>
          <router-link to="/Career"  class="button viewmore3">
              <span class="__hidden">
                viewmore
              </span>
          </router-link>
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
    </div>


    <div class="whatihave">
      <div>
        <div class="title_desc">
          <h2>
            What I have &amp;<br />
            Interests
          </h2>
        </div>

        <ul class="list">
          <li>
            <h3>Based On</h3>
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
            <h3>Tools</h3>
            <ul>
              <li>VS Code</li>
              <li>Photoshop</li>
              <li>Zeplin</li>
              <li>Figma</li>
              <li>Adobe XD</li>
            </ul>
          </li>


          <li>
            <h3>Interests</h3>
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


    <div class="madeby">
      <div>
        <div class="title_desc">
          <h2>Made this website as following :</h2>
        </div>

        <ul class="list">
          <li>
            <div>
              <img src="../assets/images/ico_follow01.png" alt="">
            </div>
            Vue-CLI
          </li>
          <li>
            <div>
              <img src="../assets/images/ico_follow02.png" alt="">
            </div>
            Node.js
          </li>
          <li>
            <div>
              <img src="../assets/images/ico_follow03.svg" alt="">
            </div>
            Scss / Sass
          </li>
          <li>
            <div>
              <img src="../assets/images/ico_follow04.svg" alt="">
            </div>
            Firebase
          </li>
          <li>
            <div>
              <img src="../assets/images/ico_follow05.svg" alt="">
            </div>
            Github
          </li>
        </ul>
      </div>
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
.vueHome {
  background:#F8FEFF;
  padding: 15.8rem 0 9.2rem;
  > div {
    @include flexbox;
    @include contentsWrap;
    justify-content: space-between;
    align-items: center;
    width: 102.5rem;
    text-align: left;
    padding: 0;
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
      font-weight: 300;
      .highlight {
        color: $pointColor;
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
  padding: 5.5rem 0;
  >div {
    position: relative;
    @include contentsWrap;
    @include flexbox;
    width: 102.5rem;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin-bottom: 5rem;
  }
  h2 {
    @include texttype1;
    text-align:left;
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: -0.75px;
    line-height: 1;
    margin-bottom: 1.4rem
  }
  .button.viewmore3 {
    position: absolute;
    top: 5rem;
    right: 1rem;
  }
  ul {
    @include flexbox;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    list-style: none;
    li {
      position: relative;
      width: 28.5rem;
      color: $pointColor;
      background: #fff;
      box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      overflow: hidden;
      margin-right: 1.4rem;
      margin-bottom: 5rem;
      transition:.3s ease all;
      &:hover {
        transform: translateY(-5px) scale(1.1);
      }
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
  }
}
.whatihave {
  padding: 5.5rem 0;
  background:#F8FEFF;
  >div {
    @include contentsWrap;
    @include flexbox;
    width: 102.5rem;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
  h2 {
    @include texttype1;
    text-align:left;
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: -0.75px;
    line-height: 1;
  }
  .list {
    display: flex;
    width: 100%;
    list-style: none;
    h3 {
      font-size: 2.2rem;
      letter-spacing: -0.75px;
      margin-bottom: 1.5rem;
    }
    >li {
      color: $textColor;
      text-align: left;
      width: 300px;
    }
    >li + li {
      margin-left: 65px;
    }
    ul {
      list-style: none;
    }
    ul li{
      position: relative;
      padding-left: 2rem;
    }
    ul li + li {
      margin-top: .7rem;
    }
    ul li:before {
      content: '';
      position: absolute;
      top: 8px;
      left: 0;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $textColor;
    }
  }
}


.madeby {
  padding: 5.5rem 0;
  >div {
    @include contentsWrap;
    @include flexbox;
    width: 102.5rem;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
  h2 {
    @include texttype2;
    text-align:left;
    font-weight: 700;
    letter-spacing: -0.75px;
    line-height: 1;
  }
  ul {
    @include flexbox;
    width: 100%;
    list-style: none;
    justify-content: space-between;
    li {
      width: 10rem;
    }
    li div {
      position: relative;
      height: 12rem;
      margin-bottom: 1.4rem;
    }
    li img{
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);
      display: block;
      min-width: 70px;
    }
  }
}
</style>

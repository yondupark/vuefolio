<template>
  <div class="vue-container">
    <headerComp />
    <section class="pageContens">
      <transition name="fade">
        <router-view :board="board"></router-view>
      </transition>
    </section>

    <footer>@ 2021 by S.W.Park. Designed by Me.</footer>
    <canvas class="fireworks"></canvas>
  </div>
</template>

<script>
import headerComp from "./components/Common/header";
import boardData from "./components/Board/boarddata.js";
import anime from "animejs/lib/anime.es.js";

export default {
  name: "S.W.Vuefolio",
  data() {
    return {
      board: boardData,
    };
  },
  components: {
    headerComp,
  },
  beforeCreate() {
    // Cursor 따라다니기
    class FollowCur {
      constructor(options = {}) {
        this.cur = null;
        this.flw = false;
        this.options = options;

        this.width = this.options.width;
        this.height = this.options.height;
        this.bdRadius = this.options.bdRadius || "50%";

        this.create();
        this.attachEvent();
      }

      attachEvent() {
        window.addEventListener("mousemove", (e) => {
          this.follow(e);
        });

        window.addEventListener("mouseout", (e) => {
          if (e.toElement === null) {
            anime({
              targets: this.cur,
              opacity: 0,
              duration: 150,
              easing: "easeOutSine",
            });

            this.flw = false;
          }
        });
      }

      follow(e) {
        const x = e.clientX;
        const y = e.clientY;

        if (!this.flw) {
          anime.set(this.cur, { translateX: x, translateY: y });
          anime({
            targets: this.cur,
            opacity: 1,
            duration: 150,
            easing: "easeOutSine",
          });
          this.flw = true;
        }

        anime({
          targets: this.cur,
          translateX: x,
          translateY: y,
          duration: 150,
          easing: "easeOutSine",
        });
      }

      create() {
        this.cur = document.createElement("div");
        this.cur.className = "follow-cur";
        this.cur.style.width = `${this.width}px`;
        this.cur.style.height = `${this.height}px`;
        this.cur.style.marginLeft = `-${this.width / 2}px`;
        this.cur.style.marginTop = `-${this.height / 2}px`;
        this.cur.style.borderRadius = this.bdRadius;
        this.cur.style.zIndex = 9999999;
        this.cur.style.pointerEvents = "none";
        this.cur.style.opacity = 0;
        this.cur.style.backgroundColor = "white";
        this.cur.style.mixBlendMode = "exclusion";
        this.cur.style.backfaceVisibility = "hidden";
        this.cur.style.position = "fixed";
        this.cur.style.top = "0px";
        this.cur.style.left = "0px";
        document.body.appendChild(this.cur);
      }
    }

    new FollowCur({
      width: 40,
      height: 40,
    });
  },
  mounted() {
    // 클릭 시 팡팡
    window.human = false;

    var canvasEl = document.querySelector(".fireworks");
    var ctx = canvasEl.getContext("2d");
    var numberOfParticules = 30;
    var pointerX = 0;
    var pointerY = 0;
    var tap =
      "ontouchstart" in window || navigator.msMaxTouchPoints
        ? "touchstart"
        : "mousedown";
    var colors = ["#0EC8B9", "#6867AC", "#CE7BB0", "#FFBCD1"];

    function setCanvasSize() {
      canvasEl.width = window.innerWidth * 2;
      canvasEl.height = window.innerHeight * 2;
      canvasEl.style.width = window.innerWidth + "px";
      canvasEl.style.height = window.innerHeight + "px";
      canvasEl.getContext("2d").scale(2, 2);
    }

    function updateCoords(e) {
      pointerX = e.clientX || e.touches[0].clientX;
      pointerY = e.clientY || e.touches[0].clientY;
    }

    function setParticuleDirection(p) {
      var angle = (anime.random(0, 360) * Math.PI) / 180;
      var value = anime.random(50, 180);
      var radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle),
      };
    }

    function createParticule(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(16, 32);
      p.endPos = setParticuleDirection(p);
      p.draw = function () {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }

    function createCircle(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.color = "#FFF";
      p.radius = 0.1;
      p.alpha = 0.5;
      p.lineWidth = 6;
      p.draw = function () {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      return p;
    }

    function renderParticule(anim) {
      for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    }

    function animateParticules(x, y) {
      var circle = createCircle(x, y);
      var particules = [];
      for (var i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }
      anime
        .timeline()
        .add({
          targets: particules,
          x: function (p) {
            return p.endPos.x;
          },
          y: function (p) {
            return p.endPos.y;
          },
          radius: 0.1,
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
        })
        .add({
          targets: circle,
          radius: anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: "linear",
            duration: anime.random(600, 800),
          },
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
          offset: 0,
        });
    }

    var render = anime({
      duration: Infinity,
      update: function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      },
    });

    document.addEventListener(
      tap,
      function (e) {
        window.human = true;
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY);
      },
      false
    );

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize, false);

  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 2s ease all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.pageContens {
  position: relative;
  z-index: 2;
}
.fireworks {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
<template>
  <div>
    <div class="vueHome">
        <div>
          <h2>안녕하세요.</h2>
          <p>저의 포트폴리오 사이트에 접속해주신걸 환영합니다.</p>
          <p id="count"></p>
          <p>퍼블리셔(프론트엔드)로서 작업해온 결과물을 보여드리기 위해 이 사이트를 구축하게 되었습니다.</p>
        </div>
    </div>
    <div class="portfolios">
      <div class="title_desc">
        <h2>Portfolios</h2>
      </div>
      <ul>
        <li v-for="(portfolios, i) in listedptf" :key="i" class="boxs">
          <a :href="portfolios.link">
            <div class="image">
                <img :src="portfolios.image" alt="">
            </div>
            <p class="desc">{{ portfolios.title }}</p>
            <p class="colorDesc">{{ portfolios.subtitle }}</p>
          </a>
        </li>
      </ul>
      <div>
        <button class="viewmore">더 알아보기</button>
      </div>
    </div>
  </div>
</template>

<script>
function calcdays() {
  var dday = new Date("August 01, 2012").getTime();
  var today = new Date().getTime();
  var gap = today - dday;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  document.getElementById("count").innerHTML = "지난 " + "<span class='highlight'>" + day + "</span>" + "일" + "간";
}
setTimeout(function() {
  calcdays();
}, 500);

export default {
  name: 'portfolios',
  data: () => ({
    listedptf: [
      {
        title: 'A',
        image: 'https://images.unsplash.com/photo-1634040843188-5ca36cf26cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://images.unsplash.com/photo-1634120790908-dee682a6d205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://images.unsplash.com/photo-1614712549550-6a1c0f488f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://images.unsplash.com/photo-1633299685305-3075ddd4fbc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://images.unsplash.com/photo-1616805714945-fae3d5b23809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
    ],
  }),
};
</script>
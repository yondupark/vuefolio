<template>
  <div class="container -full">
    <div class="flex col-2">
      <div class="img_wrap">
        <perfect-scrollbar>
          <img src="../assets/images/img_main.jpg" alt="" />
          <img src="../assets/images/img_boardlist.jpg" alt="" />
        </perfect-scrollbar>
      </div>
      <div class="contents_wrap">
        <div class="title_desc mb10">
          <h2>Review</h2>
        </div>
        <div class="guidewrap">
          <div class="reviewtxt">
            이전에 잠깐 파보았던던 React로 만든 포트폴리오 원본 소스를 날려먹었다 😀. <br />
            Github에는 빌드된 파일만 올렸기에 원본 소스의 복구가 불가능😨했다..<br />
            그래서 새로 만들어 볼 겸 피그마로 디자인도 해보고<br />
            매번 새로운 난관에 부딪히는 React는 잠시 내려두고 Vue.js를 통해 구현해보기로 했다.<br />
            이 포트폴리오를 작업할때까진 Nuxt.js의 존재를 알지못했다.<br />
            왜 마무리 될 때 쯤 알게 되었을까..?😥<br />
            여하튼, 내 이름을 사용해서 로고도 만들었다. (로고는 나름 잘 뽑힌거 같아서 기분이 매우 좋다 😀)<br />
            Vuetify, element-ui, bootstrap 등 디자인 라이브러리로 만들면 금방 만들겠지만 <br />
            Vue도 정확히 모르면서 다른 문서까지 확인해서 옵션 조절하는것보다는 내가 스타일을 작성하는게 더 빨라 보였다.👍<br />
            (지금은 후회중이다 이렇게 시간이 걸릴줄 몰랐다..😈 그냥 라이브러리 쓸걸...😂)<br />
            작업을 하면서 이번 작업에서는 전처리기(Sass)도 사용해보고 firebase의 호스팅, 리얼타임db도 사용해보기로 했다.<br />
            물론 큰 프로젝트가 아니기에 발만 담궈보는 정도겠지만 아..! 이정도 맛이구나! 하는 정도까지는 해보려 노력했다.<br />
            일전에 만들어봤던 프로젝트나 참여했던 프로젝트에서 React를 경험해보고 나서<br />
            Angular/React/vue 모두 자바스크립트 기반의 언어인지라 비슷해보이면서도 Vue는 조금 더 간단했고 직관적이었다.<br />
            작업한 파일들(빌드파일)을 업로드하기에는 firebase가 최상의 환경을 만들어주었다.<br />
            기존 퍼블리싱에서 하던 노가다🐂 짓을 vue 그리고 sass의 반복문을 통해 간단하게 처리 할 수 있었고<br />
            각 컴포넌트들에 스타일을 삽입하게 되면서 Reset, common 영역을 제외한<br />
            기존에 작업해왔던 전체 묶음 css 작성이 무의미해졌고😎 Vue에서 작업한 파일들의 형태는 조금 더 직관적으로 변했다.<br />
            여전히 현업에서는 어떻게 작업을 진행하는지는 모르기에 우선은 내 방식(구글링)대로 만들어보았다.<br />
            처음으로 접했던 React보다 Vue는 조금 더 간편하고 코딩하기에 수월했다.(아마도 React를 조금 해봐서 그런듯하다.)<br />
            수년간 사용했던 Jquery 없이 페이지를 구축하는게 조금은 이질감도 들고 뭔가 허전한 느낌이었지만<br />
            Javascript 자체가 발전했다는 생각에 자주 사용하는 내 입장에서는 나의 포지션도 함께 업그레이드되지 않을까하는 생각이 들었다.<br />
            퍼블리셔의 포지션이 점점 프론트화 되어 언젠간 하나의 직군으로 이어질 것 같다는 생각이 계속 머리속을 떠나지 않는다.<br />
            이왕 배운거 써먹어야하므로 다음에 만들땐 Nuxt.js로 만들어봐야겠다. (사실 만들어보았으나 여기에 작업한게 너무 많아서 새로 만들때 다시 써보려고 한다.)<br />
            Nuxt.js가 너무 강력하고 더 수월하게 코딩 할 수 있게 해주지만 역시나 기본기는 탄탄하게 다져야 한다고 느끼며<br />
            이 글을 마친다. (사실 현재 프로젝트 참여중이어서 짬짬히 조금씩 수정했다..😸)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />

<style>
.container > div {
  padding: 9.5rem 0 0;
}
</style>

<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

export default {
  components: {
    PerfectScrollbar,
  },
  created() {
    document.title = "이 웹사이트를 만들면서";
  },
};
</script>

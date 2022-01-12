<template>
  <div class="container -full">
    <div class="flex col-2">
      <div class="img_wrap">
          <img src="../assets/images/img_main.jpg" alt="">
          <img src="../assets/images/img_boardlist.jpg" alt="">
      </div>
      <div class="contents_wrap">
          <div class="title_desc mb10">
            <h2>Review</h2>
          </div>
          <div class="guidewrap">
            <div class="reviewtxt">
                이전에 잠깐 공부했던 리액트 기반의 포트폴리오 원본 소스를 날려먹었다 😀. <br />
                Git에는 빌드된 파일만 올렸기에 복구가 불가능..😨했다..<br />
                그래서 새로 만들어 볼 겸 디자인도 해보고 매번 새로운 난관에 부딪히는 React는 잠시 내려두고 Vue를 통해 구현해보기로 했다.<br />
                Vuetify, element-ui, bootstrap 등 디자인 라이브러리로 만들면 뚝딱 만들겠지만 <br />
                Vue도 정확히 모르면서 다른 문서까지 확인해서 옵션 조절하는것보다는 내가 스타일을 작성하는게 더 빨라 보였다.👍<br />
                (지금은 후회중이다 이렇게 시간이 걸릴줄 몰랐다..😂)<br />
                작업을 하면서 이번에는 전처리기(Sass)도 사용해보고 firebase의 호스팅, 리얼타임db도 사용해보기로 했다.<br />
                물론 큰 프로젝트가 아니에 맛만 보는정도겠지만 아 이정도 맛이구나 하는 정도까지는 해보려했다.<br />
                Angular/React/vue 모두 자바스크립트 기반의 언어인지라 비슷해보이면서도 Vue는 조금 더 간단했고 직관적이었다.<br />
                작업을 업로드하기에는 구글에서 만든 firebase가 최적의 환경을 만들어주었다. (갓구글)<br />
                기존 퍼블리싱에서 하던 노가다 짓을 vue의 반복문을 통해 간단하게 처리할수 있었고<br />
                각 컴포넌트들에 스타일을 삽입하게 되면서 리셋 공통영역을 제외한 <br />
                기존에 작업해왔던 전체 묶음 css 작성이 무의미해지고 작업한 파일들은 직관적으로 변경되었다.<br />
                여전히 현업에서는 어떻게 작업을 하는지는 모르기에 우선은 내 방식(구글링)대로 만들어보았다.<br />
                단순 퍼블리싱처럼 하드코딩된 구조가 아닌 처음으로 접했던 리액트보다 뷰는 조금 더 작성하기 수월했다.(아마도 리액트를 조금 해봐서 그런듯하다.)<br />
                수년간 사용했던 Jquery 없이 페이지를 구축하는게 조금은 이질감도 들고 뭔가 허전한 느낌이었지만 자바스크립트 자체가 발전했다는 생각에 내 입지도 많이  상승하지 않을까하는 생각이 들었다.<br />
                프론트엔드로 가는길이 점점 가까워지는 것을 느낀다.<br />
              </div>
          </div>
      </div>
      
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.flex.col-2 {
  @include flexbox;
  height: calc(100vh - 4.9rem);
  overflow: hidden;
  > div {
    height: 100%;
    overflow: auto;
  }
  .img_wrap {
    flex: 0 0 35%;
  }
  .contents_wrap {
    flex: 0 0 65%;
    padding: 2rem;
    text-align: left;
    line-height: 1.6;
    font-weight: 400;
    letter-spacing: .25px;
  }
}
.container {
  >div {
    padding: 8.5rem 0 0;
  }
}
</style>

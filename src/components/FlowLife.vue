<template>
  
    <main>
      <div class="grid grid--large">
        <!-- Lists -->
        <div class="grid__cell">
          <div class="grid__cell-img">
            <div
              class="grid__cell-img-inner"
              style="background-image: url(https://images.unsplash.com/photo-1643944398479-0fd9eaee5cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)"
              data-item="item-1"
            ></div>
          </div>
        </div>
        <div class="grid__cell">
          <div class="grid__cell-img">
            <div
              class="grid__cell-img-inner"
              style="background-image: url(https://images.unsplash.com/photo-1643828548502-2ceedbc8c494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
              data-item="item-2"
            ></div>
          </div>
        </div>
        <div class="grid__cell">
          <div class="grid__cell-img">
            <div
              class
              ="grid__cell-img-inner"
              style="background-image: url(img/28.jpg)"
              data-item="item-3"
            ></div>
          </div>
        </div>
      </div>
      <!-- // Lists -->

      <!-- Details -->
      <div class="content">
        <div class="content__item" id="item-1">
          <span class="content__item-number oh"
            ><span class="oh__inner">01</span></span
          >
          <h2 class="content__item-heading oh">
            <span class="oh__inner">Nature</span>
          </h2>
          <p class="content__item-text">
            The instruments by which public opinion is organized and focused may
            be misused. But such organization and focusing are necessary to
            orderly life.
          </p>
          <a class="content__item-link oh"
            ><span class="oh__inner">View more</span></a
          >
        </div>
        <div class="content__item" id="item-2">
          <span class="content__item-number oh"
            ><span class="oh__inner">02</span></span
          >
          <h2 class="content__item-heading oh">
            <span class="oh__inner">Love</span>
          </h2>
          <p class="content__item-text">
            As civilization has become more complex, and as the need for
            invisible government has been increas ingly demonstrated, the
            technical means have been invented and developed by which opinion
            may be regimented.
          </p>
          <a class="content__item-link oh"
            ><span class="oh__inner">View more</span></a
          >
        </div>
        <div class="content__item" id="item-3">
          <span class="content__item-number oh"
            ><span class="oh__inner">03</span></span
          >
          <h2 class="content__item-heading oh">
            <span class="oh__inner">Expense</span>
          </h2>
          <p class="content__item-text">
            The invisible government tends to be concentrated in the hands of
            the few because of the expense of manipulating the social machinery
            which controls the opinions and habits of the masses.
          </p>
          <a class="content__item-link oh"
            ><span class="oh__inner">View more</span></a
          >
        </div>

        <button class="back">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </button>
      </div>
      <!-- // Details -->
    </main>
</template>

<script>
export default {
  mounted() {

  },
  created() {
    document.title = "의식의 흐름대로 쓰는 내 삶의 흐름";
  },
};
</script>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />
<template>
  <div id="writer">
    <div class="title_desc mb10">
      <h2>게시글 작성</h2>
    </div>
    <div class="tiptabBox" >
      <Tiptap />
    </div>
    
    <div class="flex">
      <button class="button viewmore">저장</button>
      <button class="button viewmore2">취소</button>
    </div>
  </div>
</template>

<script>
import Tiptap from "./tiptap.vue";

export default {
  name: 'Writer',
  components: {
    Tiptap
  }
}
</script>

<style>
#writer {
  width: 100rem;
  margin: 0 auto;
  min-height: 95vh;
  padding: 12rem 0 5rem;
}
#writer h2 {
  margin-bottom: 2rem;
}
.ProseMirror {
  height: 60rem;
  overflow: auto;
}
.tiptabBox {
  border: 1px solid #333;
}
</style>
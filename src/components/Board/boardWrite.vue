<template>
  <div id="writer">
    <Tiptap height="300" />
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
  padding: 20rem 0;
}
.ProseMirror {
  height: 50rem;
  overflow: auto;
}
</style>
<template>
  <div id="writer">
    <Tiptap />
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
  min-height: 95vh;
  padding: 20rem 0;
}
</style>
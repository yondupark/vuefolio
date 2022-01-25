<template>
  <editor-content :editor="editor" />
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },

  setup() {
    const editor = useEditor({
      content: '<p>이것은 에디터 영역인것이여 🎉. 이제 여기다가 작성을 허믄 db로 갔다가 상세에서 뿌려질것이여</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },
}
</script>
<template>
    <div class="guidewrap">
        <div
            v-for="(guidetypes, i) in menus"
            :key="i"
            class="guide boxs"            
        >
          <p class="desc">{{ guidetypes.text }}</p>
          <p class="colorDesc">{{ guidetypes.colors }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Menubar',
  data: () => ({
    menus: [
      {
        text: 'H1',
        colors: '#',
      },
      {
        text: 'H2',
        colors: '#',
      },
      {
        text: 'H3',
        colors: '#',
      },
      {
        text: 'Paragraph',
        colors: '#',
      },
    ],
  }),
};
</script>
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
        text: 'Home',
        colors: '#',
      },
      {
        text: 'Portfolios',
        colors: '#',
      },
      {
        text: 'Lists Up',
        colors: '#',
      },
      {
        text: 'I am',
        colors: '#',
      },
      {
        text: 'Reviews',
        colors: '#',
      },
    ],
  }),
};
</script>
<template>
    <!-- <v-row justify="center">
        <a
            v-for="(link, i) in menus"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
        >
        {{ link.text }}
        </a>
    </v-row> -->

  <h1>This is Guide page</h1>
</template>

<script>
export default {
  name: 'Menubar',
  data: () => ({
    menus: [
      {
        text: 'Home',
        href: '#',
      },
      {
        text: 'Portfolios',
        href: '#',
      },
      {
        text: 'Lists Up',
        href: '#',
      },
      {
        text: 'I am',
        href: '#',
      },
      {
        text: 'Reviews',
        href: '#',
      },
    ],
  }),
};
</script>
<template>
    <div class="portfolios">
        <ul>
          <li
              v-for="(portfolios, i) in listedptf"
              :key="i"
              class="portfolios boxs"            
          >
            <h2 class="desc">{{ portfolios.title }}</h2>
            <p class="colorDesc">{{ portfolios.subtitle }}</p>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'portfolios',
  data: () => ({
    listedptf: [
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
    ],
  }),
};
</script>
<template>
  <div>
    <div class="portfolios">
      <h2>Portfolio</h2>
      <ul>
        <li v-for="(portfolios, i) in listedptf" :key="i" class="portfolios boxs">
          <a :href="portfolios.link">
            <p class="desc">{{ portfolios.title }}</p>
            <p class="colorDesc">{{ portfolios.subtitle }}</p>
            <div class="hashtags">
              <span>#{{ portfolios.hashtags[0] }}</span>
              <span>#{{ portfolios.hashtags[1] }}</span>
              <span>#{{ portfolios.hashtags[2] }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'portfolios',
  data: () => ({
    listedptf: [
      {
        title: 'A',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'A',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'A',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
    ],
  }),
};
</script>
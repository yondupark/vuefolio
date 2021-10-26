<template>
  <div>
    <div class="portfolios">
      <h2>Portfolio</h2>
      <ul>
        <li v-for="(portfolios, i) in listptf" :key="i" class="boxs">
          <a :href="portfolios.link">
            <div class="image">
                <img :src="portfolios.image" alt="">
            </div>
            <p class="desc">{{ portfolios.title }}</p>
            <p class="colorDesc">{{ portfolios.subtitle }}</p>
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
    listptf: [
      {
        title: 'A',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=8B7BCDC2',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=500B67FB',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=A89D0DE6',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=225E6693',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC01094',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },{
        title: 'A',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC01091',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC01092',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC01093',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC02092',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC01592',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },{
        title: 'A',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC03092',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC03122',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://api.lorem.space/image?w=550&h=180&hash=BDC08092',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://api.lorem.space/image?w=550&h=180',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://api.lorem.space/image?w=550&h=180',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },{
        title: 'A',
        image: 'https://api.lorem.space/image?w=550&h=180',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://api.lorem.space/image?w=550&h=180',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://api.lorem.space/image?w=550&h=180',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://api.lorem.space/image?w=550&h=180',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://api.lorem.space/image?w=550&h=180',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
    ],
  }),
};
</script>
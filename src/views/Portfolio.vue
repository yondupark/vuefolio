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
        image: 'https://images.unsplash.com/photo-1634040843188-5ca36cf26cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://images.unsplash.com/photo-1634120790908-dee682a6d205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://images.unsplash.com/photo-1614712549550-6a1c0f488f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://images.unsplash.com/photo-1633299685305-3075ddd4fbc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://images.unsplash.com/photo-1616805714945-fae3d5b23809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },{
        title: 'A',
        image: 'https://images.unsplash.com/photo-1634040843188-5ca36cf26cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://images.unsplash.com/photo-1634120790908-dee682a6d205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://images.unsplash.com/photo-1614712549550-6a1c0f488f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://images.unsplash.com/photo-1633299685305-3075ddd4fbc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://images.unsplash.com/photo-1616805714945-fae3d5b23809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },{
        title: 'A',
        image: 'https://images.unsplash.com/photo-1634040843188-5ca36cf26cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://images.unsplash.com/photo-1634120790908-dee682a6d205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://images.unsplash.com/photo-1614712549550-6a1c0f488f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://images.unsplash.com/photo-1633299685305-3075ddd4fbc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://images.unsplash.com/photo-1616805714945-fae3d5b23809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },{
        title: 'A',
        image: 'https://images.unsplash.com/photo-1634040843188-5ca36cf26cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'B',
        image: 'https://images.unsplash.com/photo-1634120790908-dee682a6d205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'C',
        image: 'https://images.unsplash.com/photo-1614712549550-6a1c0f488f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'D',
        image: 'https://images.unsplash.com/photo-1633299685305-3075ddd4fbc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        subtitle: 'Paragraph',
        hashtags: ['HTML5', 'CSS3', 'JQUERY'],
        status: '비공개',
        link: '#'
      },
      {
        title: 'E',
        image: 'https://images.unsplash.com/photo-1616805714945-fae3d5b23809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        subtitle: 'Paragraph',
        hashtags: ['React', 'Javascript', 'Sass'],
        status: '비공개',
        link: '#'
      },
    ],
  }),
};
</script>
<template>
  <div>
    <div class="portfolios">
      <h2>Portfolio</h2>
      <ul>
        <li v-for="(ptflists, i) in listptf" :key="i" class="boxs">
          <a :href="ptflists.link">
            <div class="image">
                <img :src="ptflists.image" alt="">
            </div>
            <p class="desc">{{ ptflists.title }}</p>
            <p class="colorDesc">{{ ptflists.subtitle }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { fetchNewsList } from '../api/index'

export default fetchNewsList({
  data() {
    return {
      hashtags: []
    }
  },
  created() {
    fetchNewsList()
    .then(response => this.hashtags = response.data)
    .catch();    
  }
})
</script>

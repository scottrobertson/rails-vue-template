<template>
  <div>
    <h1 class="text-center text-4xl">
      Home
    </h1>

    <div v-if="posts" class="lg:mx-auto lg:w-1/2 mb-5">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>

import Post from '../../components/post.vue'

export default {
  components: {
    Post
  },

  data: function () {
    return {
      posts: null
    }
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const { data } = await this.axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = data

    }
  }
}
</script>

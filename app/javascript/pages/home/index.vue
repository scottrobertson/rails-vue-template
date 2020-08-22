<template>
  <div>
    <h1 class="text-center text-4xl">
      Home
    </h1>

    <div v-if="posts" class="lg:mx-auto lg:w-1/2 mb-5">
      <Post v-for="post in posts" :key="post.id" :post="post" />

      Showing {{ posts.length }} posts.

      <button class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="loadMorePosts">
        Load More
      </button>
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
      const { data } = await this.axios.get('/api/posts.json')
      this.posts = data
    },
    async loadMorePosts() {
      const { data } = await this.axios.get('/api/posts.json')
      this.posts.push(...data)
    },
  }
}
</script>

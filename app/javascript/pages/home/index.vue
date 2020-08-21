<template>
  <div>
    <h1 class="text-center text-4xl">
      Home
    </h1>
    <p class="text-center">
      <router-link class="underline" to="/privacy">
        View Privacy Policy
      </router-link>
    </p>

    <div v-if="posts" class="mx-auto w-1/2">
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

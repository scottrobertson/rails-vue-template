<template>
  <div>
    <h1>Home</h1>
    <p><router-link :to="{ path: 'privacy' }">Privacy Policy</router-link></p>

    <template v-if="posts">
      <post v-bind:post="post" v-for="post in posts" :key="post.id"></post>
    </template>

    <template v-else>
      <p><a href="#" v-on:click.prevent="getPosts">Get Posts</a></p>
    </template>
  </div>
</template>

<script>

import Post from '../../components/post.vue'

export default {
  components: {
    'post': Post
  },
  data: function () {
    return {
      posts: null
    }
  },
  methods: {
    getPosts: function() {
      this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.posts = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
   @import '../../scss/application.scss'
</style>

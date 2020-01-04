<template>
  <div>
    <h1>Home</h1>
    <p><router-link :to="{ path: 'privacy' }">Privacy Policy</router-link></p>
    <p v-if="!posts"><a href="#" v-on:click.prevent="getPosts">Get Posts</a></p>

    <template v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <hr />
    </template>
  </div>
</template>

<script>
export default {
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

<template>
  <div>
    <h1 class="text-center text-4xl">Home</h1>

    <div v-if="posts" class="lg:mx-auto lg:w-1/2 mb-5">
      <Post v-for="post in posts" :key="post.id" :post="post" />

      Showing {{ posts.length }} posts.

      <button class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="loadMorePosts">Load More</button>
    </div>

    <div v-else class="text-center">Loading...</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Post from "../../components/post.vue";

interface Data {
  posts: unknown[]; // TODO: Make an interface for the post data
}

export default Vue.extend({
  components: {
    Post,
  },

  data(): Data {
    return {
      posts: null,
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const { data } = await this.axios.get("/api/posts.json");
      this.posts = data;
    },
    async loadMorePosts() {
      const { data } = await this.axios.get("/api/posts.json");
      this.posts.push(...data);
    },
  },
});
</script>

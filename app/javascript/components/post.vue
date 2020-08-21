<template>
  <div class="bg-gray-200 mt-5 lg:rounded-md p-5">
    <h2 class="text-2xl">
      {{ post.title }}
    </h2>
    <p>{{ post.body }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

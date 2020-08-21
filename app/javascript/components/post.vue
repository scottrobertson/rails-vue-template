<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

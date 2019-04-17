<template>
  <ul>
    <router-link tag="li" to="/" v-for="post in posts" :key="post.id">
      <h2>{{post.mainCatTitle}}</h2>
      <p>{{post.lead}}</p>
      <p>1</p>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'list',
  computed: {
    posts () {
      return this.$store.state.data.posts ? this.$store.state.data.posts.data : []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

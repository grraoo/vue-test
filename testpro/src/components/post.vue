<template>
<div class="post">
  <h1>
    {{post.title}}
  </h1>
  <img :src="post.mainImageLink.medium" alt="">

</div>
</template>

<script>
export default {
  computed: {
    post () {
      return this.$store.state.data.posts.data.find(post => post.fulllink === this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

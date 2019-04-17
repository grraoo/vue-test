<template>
  <h1>
    {{category.title}}
  </h1>
</template>

<script>
export default {
  computed: {
    category () {
      return this.$store.state.data.categories.name[this.$route.params.id]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

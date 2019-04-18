<template>
  <div id="app">
    <my-header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import myHeader from './components/header'

export default {
  name: 'App',
  components: {
    myHeader
  },
  created () {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style lang="scss">
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
</style>

<template>
  <ul>
    <li>
      <router-link :to="{name: 'post', params:{id:post.fulllink}}" v-for="post in posts" :key="post.id"
      class="post-card">
      <article>
        <section class="time">
          {{post.date}}
        </section>
        <section class="image">
          <img :src="post.mainImageLink.thumbnail" alt="">
        </section>
        <section class="content">
          <h2 class="category">{{post.mainCatTitle}}</h2>
          <p>{{post.lead}}</p>
        </section>

      </article>
      </router-link>
    </li>
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.category {

  font-family: Roboto;
  font-size: 13px;
  color: #17a083;
  font-weight: normal
}
.post-card {
  text-decoration: none;
}
</style>

<template>
  <ul class="posts">
    <li class="post__item"
    v-for="post in posts" :key="post.id">
      <router-link :to="{name: 'post', params:{id:post.fulllink}}"
      class="post__link">
        <article class="post__card">
          <section class="post__time">
            {{post.time}}
            <br>
            {{post.dateTpl}}
          </section>
          <div class="post__media">
            <section class="post__image">
              <img :src="post.mainImageLink.thumbnail" alt="">

                <button class="post__like">
                  <div class="post__like-wrap">
                    {{post.id}} Голосовать
                  </div>
                </button>

            </section>
            <section class="post__content">
              <h2 class="category">{{post.mainCatTitle}}</h2>
              <div class="post__text">{{post.lead}}</div>
            </section>
          </div>
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
.posts {
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
.post {
  &__item {
    width: 800px;
    margin: 0 auto 16px;
    padding-left: 16px;
    &:first-of-type .post__time {
      color: #ffffff
    }
    &:hover .post__media{
      box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.15);
    }
  }
  &__link {
    text-decoration: none;
    color: #0e0e0e;
  }
  &__card {
    display: flex;
    align-items: center;
  }
  &__media {
    transition-duration: .3s;
    display: flex;
    align-items: center;
  }

  &__image {
    position: relative;
    width: 280px;
    height: 160px;
    overflow: hidden;
    display: flex;
    & > img {
      object-fit: cover;
      object-position: center;
      display: block;
      min-width: 100%;
      height: auto;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #000;
      opacity: 0;
      transition-duration: .3s;
    }
    &:hover::before {
      opacity: 0.5;
    }
    &:hover .post__like {
      opacity: 1;
    }
  }
  &__like {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    opacity: 0;
    transition-duration: .3s;
    border-radius: 2px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    cursor: pointer;
    color: #000000;
    padding: 0;
    &-wrap {
      white-space: nowrap;
      display: flex;
      align-items: center;
      font-family: Roboto, sans-serif;
      font-size: 13px;
      padding-left: 35px;
      padding-right: 8px;
      padding-top: 15px;
      padding-bottom: 15px;
      background-image: url('../assets/heart.svg');
      background-repeat: no-repeat;
      background-position: 8px center;
    }
  }

  &__time {
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: normal;
    color: #b3b3b3;
    padding-right: 16px;
    white-space: nowrap;
    text-align: right;
  }

  &__content {
    background-color: #ffffff;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    flex-grow: 1;
  }

  &__text {
    width: 468px;
    height: 38px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #0e0e0e;
  }

}

</style>

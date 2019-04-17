<template>
  <header>

    <div class="logo">
      <button @click="openPopup" class="menu-btn">menu</button>

      <router-link :to="{path: '/'}"><img src="../assets/hero.svg"></router-link>
    </div>
    <nav class="categories">
      <ul class="navigation">
        <li v-for="cat in categories" :key="cat.id">
          <router-link class="navigation__link" :class="{'navigation__link--active': cat === $route.params.id}" :to="{name: 'category', params: {id: cat.alias}}">{{cat.title}}</router-link>
        </li>
      </ul>
    </nav>
    <aside>
      <span>18+</span>
    </aside>

  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    openPopup () {
      alert('POPUP')
    }
  },
  computed: {
    categories () {
      return this.$store.state.data.categories ? this.$store.state.data.categories.name : {}
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.menu-btn {
  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 0;
  width: 60px;
  height: 60px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 20px;
    background: #000;
    height: 3px;
  }

  &::before {
    width: 20px;
    top: 20px;
    box-shadow: 0 7px 0 0 black
  }
  &::after {
    width: 10px;
    top: 34px;
  }
}

.navigation {
  display: flex;
  list-style: none;
  li {
    list-style: none;
  }

  &__link {
    font-family: Roboto;
    font-size: 16px;
    color: #000000;
    padding: 10px 15px;
    text-decoration: none;

    &--active {
      font-weight: bold;
      cursor: default;
      pointer-events: none
    }
    &:hover {
      opacity: .7;
    }
  }
}
aside {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 13px;
  color: #b3b3b3;

}
</style>

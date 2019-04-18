<template>
  <header>
    <div class="header__top">
      <div class="logo">
        <button @click="togglePopup" class="menu-btn" :class="{'menu-btn--active': popup}">menu</button>
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
    </div>
    <section class="header__bottom">
      <div class="container">
        <h1 class="main-heading">Просто герой</h1>
        <p class="sub-heading">Главные новости о событиях в России: комментарии, мнения, интервью, аналитические материалы. Последние актуальные новости Российской Федерации.</p>
      </div>
    </section>
    <div class="popup" v-if="popup">popup</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    togglePopup () {
      this.$store.commit('setPopup', !this.popup)
    }
  },
  computed: {
    categories () {
      return this.$store.state.data.categories ? this.$store.state.data.categories.name : {}
    },
    popup () {
      return this.$store.state.popup
    }
  }
}
</script>

<style lang="scss" scoped>
.header {

  &__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  }
  &__bottom {
  background-image: radial-gradient(circle at 97% 3%, #669ccc, #66ccb6);
  padding-bottom: 260px;
  margin-bottom: -240px;
  padding-top: 90px;
}
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
  z-index: 2;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 20px;
    background: #000;
    height: 3px;
    transition-duration: .3s;
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

  &--active {
    &::before, &::after  {
      width: 20px;
      top: 50%;
      left: 50%
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
      box-shadow: none;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
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

.main-heading {
  font-family: Roboto, sans-serif;
  font-size: 150px;
  font-weight: 300;
  line-height: 1;
  color: #a1d3e6;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
}

.sub-heading {
  width: 685px;
  height: 31px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(43deg, rgba(242, 242, 242, 0), #dae3f2);
  z-index: 1;
  text-align: center;
  font-size: 50px;
  font-weight: bold
}

</style>

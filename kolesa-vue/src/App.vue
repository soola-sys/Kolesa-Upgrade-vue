<template>
  <div class="wrapper">
    <div class="container">
      <header class="header">
        <div class="header__wrapper">
          <div class="header__logo">
            <a href="https://job.kolesa.kz/">
              <img
                src="./assets/kolesa.svg"
                alt="Kolesa Group"
                width="216"
                height="35"
              />
            </a>
          </div>
          <div class="header__inner">
            <search></search>
            <user @userData="changeData"></user>
          </div>
        </div>
      </header>
      <main class="main">
        <aside class="main__aside">
          <nav-menu></nav-menu>
        </aside>
        <router-view
          @updateUserData="updateUserData"
          @changeData="changeData"
          :search="search"
        ></router-view>
      </main>
    </div>
    <footer-card></footer-card>
  </div>
</template>
<script>
import Search from '@/layouts/components/Search.vue';
import FooterCard from '@/layouts/components/Footer.vue';
import NavMenu from '@/layouts/components/NavMenu.vue';
import User from '@/layouts/components/User.vue';

export default {
  name: 'App',
  components: {
    Search,
    FooterCard,
    NavMenu,
    User,
  },
  data() {
    return {
      search: 'adadaw',
    };
  },
  methods: {
    handleOrder(price) {
      this.closeModal();
      this.user.score -= price;
    },
    updateUserData(e) {
      this.search = e.target.value;
    },
    changeData(user) {
      this.user = user;
    },
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>

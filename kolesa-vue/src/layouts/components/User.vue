<template>
  <div class="header__user user">
    <button class="user__button" type="button">
      <img
        :src="userInfo.avatarUrl"
        alt="User"
        class="user__image"
        width="44"
        height="44"
      />
      <div class="user__wrapper">
        <p class="user__title">{{ userInfo.name }}</p>
        <span class="user__subtitle"> {{ score }}</span>
      </div>
    </button>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapState({
      userInfo: 'userInfo',
    }),
    score() {
      return this.userInfo.score ? `${this.userInfo.score} баллов` : '';
    },
  },
  mounted() {
    this.userData();
  },
  methods: {
    userData() {
      this.$store.dispatch('updateUserData');
    },
  },
};
</script>

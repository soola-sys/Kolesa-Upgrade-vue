<template>
  <div class="header__user user">
    <button class="user__button" type="button">
      <img
        :src="user.avatarUrl"
        alt="User"
        class="user__image"
        width="44"
        height="44"
      />
      <div class="user__wrapper">
        <p class="user__title">{{ user.name }}</p>
        <span class="user__subtitle"> {{ user.score }} баллов</span>
      </div>
    </button>
  </div>
</template>
<script>
import axios from '../axios';

export default {
  props: {
    user: Object,
  },
  name: 'User',
  data() {
    return {};
  },
  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data').then((response) => {
      this.user = response.data;
      this.$emit('userData', this.user);
    });
  },
};
</script>

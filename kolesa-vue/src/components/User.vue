<template>
  <div class="header__user user">
    <button class="user__button" type="button">
      <img
        src="@/assets/user.png"
        alt="User"
        class="user__image"
        width="44"
        height="44"
      />
      <div class="user__wrapper">
        <p class="user__title">Мортиджан</p>
        <span class="user__subtitle"> {{ balance }} баллов</span>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    balance: Number,
  },
  name: 'User',
  data() {
    return {};
  },
};
</script>

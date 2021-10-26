<template>
  <div class="header__search search">
    <button type="button" class="search__button">
      <img src="@/assets/lupa.svg" alt="Lupa" width="18" height="18" />
    </button>
    <input
      type="input"
      v-model="search"
      class="search__input input"
      placeholder="Поиск"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  methods: {},
};
</script>

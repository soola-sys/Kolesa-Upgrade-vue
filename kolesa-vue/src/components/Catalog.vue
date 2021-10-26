<template>
  <div class="main-сatalog catalog js-catalog">
    <div v-for="shirt in products" :key="shirt.id" class="catalog__item shirt">
      <div class="catalog__image">
        <img :src="getImgUrl(shirt.img)" width="330" height="330" />
        <span v-if="shirt.isNew" class="catalog__badge badge">new</span>
      </div>
      <div class="catalog__description">
        <div class="catalog__price">
          {{ shirt.price }}
        </div>
        <h3 class="catalog__title">
          {{ shirt.title }}
        </h3>
        <p v-if="shirt.size" class="catalog__size">{{ shirt.size }}</p>
        <button
          class="button catalog__button catalog__button_blue"
          @click="$emit('openCard', shirt)"
        >
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Catalog',
  props: {
    products: Array,
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`@/assets/${item}`);
    },
  },
};
</script>

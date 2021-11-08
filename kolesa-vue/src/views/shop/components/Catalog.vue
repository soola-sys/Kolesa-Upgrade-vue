<template>
  <div class="main-сatalog catalog js-catalog">
    <div v-for="shirt in products" :key="shirt.id" class="catalog__item shirt">
      <div class="catalog__image">
        <img :src="shirt.mainImage" width="330" height="330" />
        <span v-if="shirt.isNew" class="catalog__badge badge">new</span>
      </div>
      <div class="catalog__description">
        <div class="catalog__price">
          {{ shirt.price }}
        </div>
        <h3 class="catalog__title">
          {{ shirt.title }}
        </h3>
        <p v-if="shirt.sizes" class="catalog__size">
          {{
            shirt.sizes.join() && shirt.sizes.length
              ? `Размеры  ${String(shirt.sizes.join())}`
              : ""
          }}
        </p>
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
};
</script>

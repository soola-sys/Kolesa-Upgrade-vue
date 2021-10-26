<template>
  <div class="main__goods goods">
    <div class="goods__item">
      <input
        class="goods__input"
        id="radio-1"
        type="radio"
        name="radio"
        value="Все товары"
        checked
      />
      <label
        data-id="all"
        class="goods__label category-label js-category"
        for="radio-1"
        >Все товары</label
      >
    </div>
    <div class="goods__item">
      <input
        class="goods__input"
        id="radio-2"
        type="radio"
        name="radio"
        value="Одежда"
      />
      <label
        data-id="cloth"
        class="goods__label category-label js-category"
        for="radio-2"
        >Одежда</label
      >
    </div>

    <div class="goods__item">
      <input
        class="goods__input"
        id="radio-3"
        type="radio"
        name="radio"
        value="Аксессуары"
      />
      <label
        data-id="accessories"
        class="goods__label category-label js-category"
        for="radio-3"
        >Аксессуары</label
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Goods',
  data() {
    return {};
  },
};
</script>

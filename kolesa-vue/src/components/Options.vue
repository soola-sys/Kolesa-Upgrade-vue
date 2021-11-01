<template>
  <div class="product-color">
    <div class="product-color__wrapper">
      <p class="product-color__title">Цвета:</p>
      <div class="product-color__color color">
        <div v-for="unit in colorData" :key="unit.id" class="color__item">
          <div :style="{ background: unit.color }" class="color__image"></div>
          <div class="color__radio">
            <input
              :id="unit.id"
              type="radio"
              name="radio"
              :value="unit"
              class="color__input"
              :checked="unit === optionKey"
            />
            <label class="color__label" :for="unit.id">{{ unit.label }}</label>
          </div>
        </div>
      </div>
      <div class="product-size">
        <p class="product-size__title">Размер:</p>
        <div class="product-size__options options">
          <div
            class="options__radio"
            v-for="item in sizeData"
            :key="item.id"
            @click="$emit('change', item)"
          >
            <input
              :id="item.id"
              type="radio"
              name="radio"
              class="options__input"
              :checked="item === optionKey"
            />
            <label class="options__label">{{ item }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Options',
  props: {
    colorData: Array,
    sizeData: Array,
    optionKey: String,
  },
  model: {
    prop: 'optionKey',
    event: 'change',
  },
};
</script>

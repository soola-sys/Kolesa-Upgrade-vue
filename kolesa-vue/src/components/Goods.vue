<template>
  <div class="main__goods goods">
    <div
      class="goods__item"
      v-for="item in items"
      :key="item.id"
      @click="$emit('change', item.id)"
    >
      <input
        class="goods__input"
        :id="item.id"
        type="radio"
        name="radio"
        :value="item.value"
        :checked="item.id === currentKey"
      />
      <label
        data-id="all"
        class="goods__label category-label js-category"
        for="radio-1"
        >{{ item.name }}</label
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Goods',
  props: {
    items: Array,
    currentKey: String,
  },
  model: {
    prop: 'currentKey',
    event: 'change',
  },
  data() {
    return {};
  },
};
</script>

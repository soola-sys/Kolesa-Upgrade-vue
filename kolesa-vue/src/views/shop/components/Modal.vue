<template>
  <div v-if="isOpen" class="modal">
    <div class="modal__wrapper">
      <div class="modal__outer">
        <div class="modal-container">
          <div class="modal__inner inner">
            <div class="inner__image">
              <img
                :src="data.mainImage"
                alt="Hoodie"
                class="inner__image_big"
                width="330"
                height="330"
              />
            </div>
            <div class="additional__images">
              <div
                v-for="item in data.images"
                :key="item.id"
                class="inner__mini"
              >
                <button type="button">
                  <img
                    :src="item"
                    alt="White hoodie"
                    class="inner__image_small"
                    width="50"
                    height="50"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="modal__content content">
            <h3 class="content__title">
              {{ data.title }}
            </h3>
            <div class="content__wrapper">
              <div class="content__points">
                <p class="content__text">{{ data.price }}</p>
                <button
                  class="button content__button content__button_yellow"
                  type="button"
                  @click="order"
                >
                  Заказать
                </button>
              </div>
              <div class="content__balance balance">
                <div class="balance__description">
                  <p class="balance__title">Твой баланс:</p>
                  <span class="balance__subtitle">{{ data.score }} баллов</span>
                </div>
                <div class="balance__image"></div>
              </div>
            </div>
            <options-data
              :colorData="data.colors"
              :sizeData="data.sizes"
              v-model="selectedSize"
            ></options-data>
            <div class="product-info">
              <div class="product-info__item">
                <p class="product-info__title title">Детали:</p>
                <span class="product-info__subtitle js-details">{{
                  data.description
                }}</span>
              </div>
              <div class="product-info__item">
                <p class="product-info__title title">Как выбрать размер:</p>
                <span class="product-info__write">Никак</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__flag"></div>
        <div class="modal__icon">
          <button class="modal__button" @click="closeModal">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import optionsData from "./Options.vue";

export default {
  name: "Modal",
  components: {
    optionsData,
  },
  props: {
    isOpen: Boolean,
    data: Object,
    cost: Object,
  },
  data() {
    return {
      color: [],
      sizes: [],
      selectedSize: "X",
    };
  },
  methods: {
    changeLabel(data) {
      this.color = data.colors;
      this.sizes = data.sizes;
    },
    closeModal() {
      this.$emit("close");
    },
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`@/assets/${item}`);
    },
    order() {
      const { score } = this.$store.state.userInfo;
      if (score - this.data.price <= 0) {
        alert("У вас недостаточно баллов");
        return;
      }
      this.closeModal();
      this.$store.commit("setNewScore", this.data.price);
    },
  },
};
</script>

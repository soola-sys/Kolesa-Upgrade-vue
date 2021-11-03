<template>
  <div class="main__products">
    <div class="main__promo">
      <img src="@/assets/banner.png" alt="Sale" width="1038" height="335" />
    </div>
    <hot-button></hot-button>
    <goods-label :items="tabs" v-model="selected"></goods-label>
    <catalog :products="filterProducts" @openCard="openCard"></catalog>
    <modal-card
      :data="modalData"
      :is-open="isShowModal"
      @close="closeModal"
    ></modal-card>
  </div>
</template>
<script>
import ModalCard from './components/Modal.vue';
import HotButton from './components/Hotbutton.vue';
import GoodsLabel from './components/Goods.vue';
import Catalog from './components/Catalog.vue';

export default {
  name: 'ShopPage',
  components: {
    ModalCard,
    HotButton,
    GoodsLabel,
    Catalog,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      selected: 'all',
      tabs: [
        {
          name: 'Все товары',
          id: 'all',
        },
        {
          name: 'Одежда',
          id: 'clothes',
        },
        {
          name: 'Аксессуары',
          id: 'accessories',
        },
      ],
    };
  },
  computed: {
    mergedProducts() {
      return [
        ...this.$store.state.clothes,
        ...this.$store.state.accessories,
      ].sort((item) => (item.isNew ? -1 : 1));
    },
    filterProducts() {
      if (this.selected === 'clothes') {
        return [...this.$store.state.clothes].sort((item) => (item.isNew ? -1 : 1));
      }
      if (this.selected === 'accessories') {
        return [...this.$store.state.accessories].sort((item) => (item.isNew ? -1 : 1));
      }
      return this.mergedProducts;
    },
  },
  mounted() {
    this.fetchClothes();
    this.fetchAccessories();
  },
  methods: {
    fetchClothes() {
      this.$store.dispatch('fetchClothesData');
    },
    fetchAccessories() {
      this.$store.dispatch('fetchAccessoriesData');
    },
    openCard(data) {
      this.openModal();
      this.modalData = data;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
};
</script>

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
      :cost="user.score"
      @order="handleOrder"
    ></modal-card>
  </div>
</template>
<script>
import ModalCard from './components/Modal.vue';
import HotButton from './components/Hotbutton.vue';
import GoodsLabel from './components/Goods.vue';
import Catalog from './components/Catalog.vue';
import axios from '@/axios';

export default {
  name: 'ShopPage',
  props: {
    user: Object,
    search: String,
    costModal: Number,
  },
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
      clothes: [],
      accessories: [],
    };
  },
  computed: {
    mergedProducts() {
      return [...this.clothes, ...this.accessories].sort((item) => (item.isNew ? -1 : 1));
    },
    filterProducts() {
      if (this.selected === 'clothes') {
        return [...this.clothes].sort((item) => (item.isNew ? -1 : 1));
      }
      if (this.selected === 'accessories') {
        return [...this.accessories].sort((item) => (item.isNew ? -1 : 1));
      }
      return this.mergedProducts;
    },
  },

  mounted() {
    axios.get('templates/-_RLsEGjof6i/data').then((response) => {
      this.clothes = response.data;
    });
    axios.get('templates/q3OPxRyEcPvP/data').then((res) => {
      this.accessories = res.data;
    });
  },
  methods: {
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
    handleOrder(price) {
      this.closeModal();
      if (price > this.user.score) {
        alert('Баллов не хватает');
      } else {
        this.user.score -= price;
      }
    },
  },
};
</script>

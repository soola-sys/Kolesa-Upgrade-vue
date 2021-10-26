<template>
  <div class="wrapper">
    <div class="container">
      <header class="header">
        <div class="header__wrapper">
          <div class="header__logo">
            <a href="https://job.kolesa.kz/">
              <img
                src="./assets/kolesa.svg"
                alt="Kolesa Group"
                width="216"
                height="35"
              />
            </a>
          </div>
          <div class="header__inner">
            <search></search>
            <user :balance="score"></user>
          </div>
        </div>
      </header>
      <main class="main">
        <aside class="main__aside">
          <nav-menu></nav-menu>
        </aside>
        <div class="main__products">
          <div class="main__promo">
            <img
              src="./assets/banner.png"
              alt="Sale"
              width="1038"
              height="335"
            />
          </div>
          <hot-button></hot-button>
          <goods-label></goods-label>
          <catalog :products="mergedProducts" @openCard="openCard"></catalog>
        </div>
      </main>
    </div>
    <footer-card></footer-card>
    <modal-card
      :data="modalData"
      :is-open="isShowModal"
      @close="closeModal"
      @order="setScore"
    ></modal-card>
  </div>
</template>
<script>
import ModalCard from '@/components/Modal.vue';
import Search from '@/components/Search.vue';
import FooterCard from '@/components/Footer.vue';
import NavMenu from '@/components/NavMenu.vue';
import HotButton from '@/components/Hotbutton.vue';
import GoodsLabel from './components/Goods.vue';
import User from './components/User.vue';
import Catalog from './components/Catalog.vue';

export default {
  name: 'App',
  components: {
    ModalCard,
    Search,
    FooterCard,
    NavMenu,
    HotButton,
    GoodsLabel,
    User,
    Catalog,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      score: 500,
      search: 'Sultan',
      clothes: [
        {
          id: 0,
          title: 'Классный худи',
          price: 350,
          isNew: true,
          img: 'hoodie.png',
          size: 'Размеры S/M/L',
        },
        {
          id: 1,
          title: 'Класная футболка',
          price: 50,
          isNew: true,
          img: 'shirt.png',
          size: 'Размеры S/M/L',
        },
        {
          id: 2,
          title: 'Классный худи',
          price: 1000,
          isNew: true,
          img: 'hoodie.png',
          size: 'Размеры S/M/L',
        },
        {
          id: 3,
          title: 'Класная футболка',
          price: 220,
          isNew: false,
          img: 'shirt.png',
          size: 'Размеры S/M/L',
        },
        {
          id: 4,
          title: 'Класная футболка',
          price: 700,
          isNew: true,
          img: 'shirt.png',
          size: 'Размеры S/M/L',
        },
      ],
      accessories: [
        {
          id: 6,
          title: 'Класная бутылка',
          price: 100,
          isNew: true,
          img: 'bottle.png',
          details: 'Что то',
        },
        {
          id: 7,
          title: 'Класная бутылка',
          price: 100,
          isNew: false,
          img: 'bottle.png',
          details: 'Что то',
        },
        {
          id: 8,
          title: 'Класные очки',
          price: 600,
          isNew: true,
          img: 'ray.jpg',
          details: 'Что то',
        },
        {
          id: 9,
          title: 'Класный рюкзак',
          price: 550,
          isNew: true,
          img: 'tommy.jpg',
          details: 'Что то',
        },
        {
          id: 10,
          title: 'Класные очки',
          price: 600,
          isNew: false,
          img: 'ray.jpg',
          details: 'Что то',
        },
        {
          id: 11,
          title: 'Класный рюкзак',
          price: 550,
          isNew: false,
          img: 'tommy.jpg',
          details: 'Что то',
        },
        {
          id: 12,
          title: 'Класный рюкзак',
          price: 600,
          isNew: false,
          img: 'tommy.jpg',
          details: 'Что то',
        },
      ],
    };
  },
  computed: {
    mergedProducts() {
      return [...this.clothes, ...this.accessories].sort((item) => (item.isNew ? -1 : 1));
    },
    sortedClothes() {
      return [...this.clothes].sort((item) => (item.isNew ? -1 : 1));
    },
    sortedAccessories() {
      return [...this.accessories].sort((item) => (item.isNew ? -1 : 1));
    },
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
    setScore(price) {
      this.closeModal();
      if (price > this.score) {
        alert('Баллов не хватает');
      } else {
        this.score -= price;
      }
    },
    setSearch(e) {
      this.search = e.target.value;
    },
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`./assets/${item}`);
    },
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>

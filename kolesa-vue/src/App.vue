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
            <user :balance="user" @userData="changeData"></user>
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
          <goods-label :items="tabs" v-model="selected"></goods-label>
          <catalog :products="filterProducts" @openCard="openCard"></catalog>
        </div>
      </main>
    </div>
    <footer-card></footer-card>
    <modal-card
      :data="modalData"
      :is-open="isShowModal"
      @close="closeModal"
      @order="setScore"
      :cost="score"
    ></modal-card>
  </div>
</template>
<script>
import ModalCard from "@/components/Modal.vue";
import Search from "@/components/Search.vue";
import FooterCard from "@/components/Footer.vue";
import NavMenu from "@/components/NavMenu.vue";
import HotButton from "@/components/Hotbutton.vue";
import GoodsLabel from "./components/Goods.vue";
import User from "./components/User.vue";
import Catalog from "./components/Catalog.vue";
import axios from "@/axios";

export default {
  name: "App",
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
      search: "Sultan",
      selected: "all",
      userName: "",
      tabs: [
        {
          name: "Все товары",
          id: "all",
        },
        {
          name: "Одежда",
          id: "clothes",
        },
        {
          name: "Аксессуары",
          id: "accessories",
        },
      ],
      clothes: [],
      accessories: [],
    };
  },
  computed: {
    mergedProducts() {
      return [...this.clothes, ...this.accessories].sort((item) =>
        item.isNew ? -1 : 1
      );
    },
    filterProducts() {
      if (this.selected === "clothes") {
        return [...this.clothes].sort((item) => (item.isNew ? -1 : 1));
      }
      if (this.selected === "accessories") {
        return [...this.accessories].sort((item) => (item.isNew ? -1 : 1));
      }
      return this.mergedProducts;
    },
    // sortedClothes() {
    //   return [...this.clothes].sort((item) => (item.isNew ? -1 : 1));
    // },
    // sortedAccessories() {
    //   return [...this.accessories].sort((item) => (item.isNew ? -1 : 1));
    // },
  },
  mounted() {
    axios.get("templates/-_RLsEGjof6i/data").then((response) => {
      this.clothes = response.data;
    });
    axios.get("templates/q3OPxRyEcPvP/data").then((res) => {
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
    setScore(price) {
      this.closeModal();
      if (price > this.score) {
        alert("Баллов не хватает");
      } else {
        this.score -= price;
      }
    },
    setSearch(e) {
      this.search = e.target.value;
    },
    changeData(user) {
      this.user = user;
    },
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>

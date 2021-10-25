<template>
  <div class="wrapper">
                <div class="container">
                    <header class="header">
                            <div class="header__wrapper">
                                <div class="header__logo">
                                    <a href="https://job.kolesa.kz/">
                                    <img src="./assets/kolesa.svg"
                                    alt="Kolesa Group"
                                    width="216"
                                    height="35">
                                    </a>
                                </div>
                                <div class="header__inner">
                                    <div class="header__search search">
                                        <button type="button" class="search__button">
                                               <img src="./assets/lupa.svg"
                                               alt="Lupa" width="18" height="18">
                                        </button>
                                        <input type="input" class="search__input input"
                                        placeholder="Поиск" name="search" >
                                     </div>
                                     <div class="header__user user">
                                         <button class="user__button" type="button">
                                             <img src="./assets/user.png" alt="User"
                                             class="user__image" width="44" height="44">
                                             <div class="user__wrapper">
                                                <p class="user__title">Мортиджан</p>
                                                <span class="user__subtitle">
                                                  {{score}} баллов</span>
                                            </div>
                                         </button>
                                     </div>
                                </div>
                            </div>
                    </header>
                        <main class="main">
                                <aside class="main__aside">
                                    <nav class="aside__menu menu">
                                        <ul class="menu__list">
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Оргсхема
                                            </li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Kolesa Team
                                              </li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Kolesa Shop
                                              </li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Картина компании
                                              </li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Новости
                                              </li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Education</li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Guidelines</li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              Библиотека</li>
                                            <li class="menu__item">
                                              <a href="#" class="menu__item"></a>
                                              FAQ</li>
                                        </ul>
                                    </nav>
                                </aside>
                                <div class="main__products">
                                    <div class="main__promo">
                                        <img src="./assets/banner.png"
                                        alt="Sale"
                                        width="1038"
                                        height="335">
                                    </div>
                                <div class="main__hotbuttons hotbuttons">
                                     <div>
                                        <button type="button" class="hotbuttons__button">
                                            <div class="hotbuttons__item hotbuttons_green">
                                                <p class="hotbuttons__title">Получить баллы</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" class="hotbuttons__button">
                                            <div class="hotbuttons__item hotbuttons_yellow">
                                                <p class="score-title">Получить баллы</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" class="hotbuttons__button">
                                            <div class="hotbuttons__item hotbuttons_blue">
                                                <p class="score-title">Получить баллы</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div class="main__goods goods">
                                    <div class="goods__item"
                                     >
                                        <input class="goods__input"
                                        id="radio-1" type="radio"
                                        name="radio" value="Все товары"
                                        v-model="selected"
                                        checked>
                                        <label data-id="all"
                                        class="goods__label category-label js-category"
                                         for="radio-1">Все товары</label>
                                    </div>
                                    <div class="goods__item">
                                        <input  class="goods__input"
                                         id="radio-2"
                                         type="radio"
                                         name="radio"
                                          v-model="selected"
                                          value="Одежда">
                                        <label  data-id="cloth"
                                         class="goods__label category-label js-category"
                                        for="radio-2">Одежда</label>
                                    </div>

                                    <div class="goods__item">
                                        <input  class="goods__input"
                                        id="radio-3"
                                        type="radio"
                                        v-model="selected"
                                        name="radio"
                                        value="Аксессуары">
                                        <label  data-id="accessories"
                                        class="goods__label category-label js-category"
                                         for="radio-3">Аксессуары</label>
                                    </div>
                                </div>
                                <div class="main-сatalog catalog js-catalog">
                                     <div v-for="shirt in mergedProducts"
                                          :key = shirt.id class="catalog__item shirt"
                                          >
                                        <div
                                        class="catalog__image" >
                                            <img :src="getImgUrl(shirt.img)"
                                            width="330" height="330">
                                            <span v-if="shirt.isNew"
                                            class="catalog__badge badge">new</span>
                                        </div>
                                        <div class="catalog__description">
                                        <div class="catalog__price">
                                            {{shirt.price}}
                                        </div>
                                        <h3 class="catalog__title">
                                            {{shirt.title}}
                                        </h3>
                                        <p v-if="shirt.size"
                                         class="catalog__size">{{shirt.size}}</p>
                                        <button
                                        class="button catalog__button catalog__button_blue"
                                        @click='openCard(shirt)'
                                        >
                                          Заказать</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </main>
                    </div>
                    <footer class="footer">
                            <div class="footer-container container">
                                <div class="footer__inner">
                                    <div class="footer__social social">
                                        <div class="social__title">© Kolesa Group</div>
                                        <div >
                                            <a href="https://www.instagram.com"
                                            class="social__link">
                                            <img src="./assets/instagram.svg"
                                             alt="Instagram" width="20" height="20"></a>
                                            <a href="https://www.youtube.com"
                                            class="social__link">
                                            <img src="./assets/youtube.svg"
                                            alt="Youtube" width="20" height="20">
                                            </a>
                                            <a href="https://vk.com" class="social__link">
                                            <img src="./assets/vk.svg"
                                            alt="Vkontakte" width="20" height="20">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="footer__contact contact">
                                        <div class="contact__text">
                                            <div class="contact__idea">
                                             <span>
                                                 Есть идеи что улучшить?
                                                 Не знаешь, с кем решить проблему?
                                            </span>
                                            </div>
                                            <div class="contact__item">
                                                <button
                                                class="contact__button_white
                                                contact__button button">
                                                  Написать</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </footer>
                  <modal-card :data="modalData"
                   :is-open="isShowModal"
                    @close="closeModal"
                    @order ="setScore"
                    ></modal-card>
            </div>
</template>
<script>
import ModalCard from '@/components/Modal.vue';

export default {
  name: 'App',
  components: {
    ModalCard,
  },
  data() {
    return {
      selected: 'Все товары',
      isShowModal: false,
      modalData: {},
      score: 500,
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
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`./assets/${item}`);
    },
  },
};
</script>

<style lang="scss">
@import './scss/style.scss';
</style>

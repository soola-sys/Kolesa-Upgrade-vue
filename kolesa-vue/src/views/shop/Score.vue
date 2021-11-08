<template>
  <div class="main-block score">
    <div class="score__info">
      <router-link :to="{ name: 'Shop' }" replace> Kolesa-Shop </router-link>
      /
      <a href="#"> Как получить баллы </a>
    </div>
    <h1 class="score__title">Как получить баллы</h1>
    <div class="main-block__card card">
      <div class="card__item">
        <div class="card__image">
          <img src="@/assets/bonus.png" alt="Bonus" width="32" height="32" />
        </div>
        <div class="card__desc">
          <h1 class="card__title">
            Мастер-классы, тренинги, лекции, подкасты, прямые эфиры
          </h1>
          <span class="card__points">90 баллов</span>
          <p class="card__subtitle">
            Стань спикером на международной конференции по своему направлению
          </p>
        </div>
        <div>
          <button class="card__btn button catalog__button_blue">
            Отправить заявку
          </button>
        </div>
      </div>
      <div class="card__item">
        <div class="card__image">
          <img src="@/assets/bonus.png" alt="Bonus" width="32" height="32" />
        </div>
        <div class="card__desc">
          <h1 class="card__title">Выступление на конференциях</h1>
          <span class="card__points">90 баллов</span>
          <p class="card__subtitle">
            Стань спикером в Колёсах и на meetup других компаний. Расскажи о
            наших продуктах и технологиях которые мы используем
          </p>
        </div>
        <div>
          <button class="card__btn button catalog__button_blue">
            Отправить заявку
          </button>
        </div>
      </div>
      <div class="card__item">
        <div class="card__image">
          <img src="@/assets/bonus.png" alt="Bonus" width="32" height="32" />
        </div>
        <div class="card__desc">
          <h1 class="card__title">Выступление на конференциях</h1>
          <span class="card__points">90 баллов</span>
          <p class="card__subtitle">
            Стань спикером в Колёсах и на meetup других компаний. Расскажи о
            наших продуктах и технологиях которые мы используем
          </p>
        </div>
        <div>
          <button class="card__btn button catalog__button_blue">
            Отправить заявку
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/scss/_vars.scss";
.main-block {
  &__card {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
}
.card {
  &__item {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 24px;
    width: 100%;
    max-width: 330px;
    box-shadow: 0px 2px 10px rgba(28, 24, 25, 0.1);
    border-radius: 16px;
  }
  &__image {
    margin-bottom: 16px;
  }
  &__points {
    background: #e9f2fb;
    border-radius: 4px;
    padding: 0 12px 0 12px;
  }
  &__desc {
    margin-bottom: 68px;
    width: 100%;
  }
  &__title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: $black;
    margin: 0 0 8px 0;
  }
  &__btn {
    margin: auto;
    width: 100%;
    height: 44px;
    font-size: 16px;
    line-height: 24px;
  }
  &__subtitle {
    margin: 8px 0 0 0;
  }
}
.score {
  &__info {
    color: #2a81dd;
  }
  &__title {
    margin: 24px 0 16px 0;
    font-size: 20px;
    line-height: 32px;
    font-weight: 600px;
  }
}
</style>

<template>
  <div class="main__hotbuttons hotbuttons">
    <div>
      <button type="button" class="hotbuttons__button">
        <div class="hotbuttons__item hotbuttons_green">
          <p class="hotbuttons__title">Получить баллы</p>
        </div>
      </button>
    </div>
    <div>
      <button
        @click="$router.push('/shop/score')"
        type="button"
        class="hotbuttons__button"
      >
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
</template>
<script>
export default {
  name: 'Hotbutton',
};
</script>

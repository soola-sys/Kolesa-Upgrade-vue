<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footer__inner">
        <div class="footer__social social">
          <div class="social__title">© Kolesa Group</div>
          <div>
            <a href="https://www.instagram.com" class="social__link">
              <img
                src="@/assets/instagram.svg"
                alt="Instagram"
                width="20"
                height="20"
            /></a>
            <a href="https://www.youtube.com" class="social__link">
              <img
                src="@/assets/youtube.svg"
                alt="Youtube"
                width="20"
                height="20"
              />
            </a>
            <a href="https://vk.com" class="social__link">
              <img
                src="@/assets/vk.svg"
                alt="Vkontakte"
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
        <div class="footer__contact contact">
          <div class="contact__text">
            <div class="contact__idea">
              <span>
                Есть идеи что улучшить? Не знаешь, с кем решить проблему?
              </span>
            </div>
            <div class="contact__item">
              <button class="contact__button_white contact__button button">
                Написать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

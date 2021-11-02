<template>
  <nav class="aside__menu menu">
    <ul class="menu__list">
      <li v-for="(item, index) in routes" :key="index" class="menu__item">
        <router-link
          :to="item.link"
          v-html="item.label"
          class="menu__link"
        ></router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      routes: [
        {
          link: '/',
          label: 'Оргсхема',
        },
        {
          link: '/shop',
          label: 'Kolesa Shop',
        },
        {
          link: '/about',
          label: 'Kolesa Team',
        },
        {
          link: '#',
          label: 'Картина компании',
        },
      ],
    };
  },
};
</script>

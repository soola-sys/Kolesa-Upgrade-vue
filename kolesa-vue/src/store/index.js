import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      score: 0,
      avatarUrl: '',
    },
    clothes: [],
    accessories: [],
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },
    updateClothes(state, response) {
      state.clothes = response;
    },
    updateAccessories(state, response) {
      state.accessories = response;
    },
  },
  actions: {
    updateUserData({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data').then((response) => {
        commit('updateUserInfo', response.data);
      });
    },
    fetchClothesData({ commit }) {
      axios.get('templates/-_RLsEGjof6i/data').then((response) => {
        commit('updateClothes', response.data);
      });
    },
    fetchAccessoriesData({ commit }) {
      axios.get('templates/q3OPxRyEcPvP/data').then((response) => {
        commit('updateAccessories', response.data);
      });
    },
  },
});

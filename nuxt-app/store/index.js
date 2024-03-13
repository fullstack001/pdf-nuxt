import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(payload) {
      this.user = payload;
    },
  },
});

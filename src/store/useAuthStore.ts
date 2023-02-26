import { defineStore } from "pinia";

interface IAuthState {
  email: string | null;
  passwordHash: string | null;
  token: string | null;
  expiresIn: string | null;
}

export const useAuthStore = defineStore("authentication", {
  state: (): IAuthState => ({
    email: null,
    passwordHash: null,
    token: null,
    expiresIn: null,
  }),
  getters: {
    getEmail: (state) => state.email,
  },
  actions: {
    login({ email = null, passwordHash = null, refreshToken = null }) {
      this.email = email;
      this.passwordHash = passwordHash;
      this.token = refreshToken;
    },
    logout() {
      this.email = null;
      this.passwordHash = null;
      this.token = null;
    },
  },
  persist: {
    key: "authentication",
    storage: window.localStorage,
  },
});

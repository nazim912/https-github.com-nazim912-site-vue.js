import { defineStore } from 'pinia';

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    messages: []
  }),
  actions: {
    addMessage(message) {
      this.messages.push(message);
    }
  },
  getters: {
    allMessages() {
      return this.messages;
    }
  }
});
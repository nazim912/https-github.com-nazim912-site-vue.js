<script>
import { ref } from 'vue';
import { useMessageStore } from '../config/messageStore';

export default {
  setup() {
    const messageStore = useMessageStore();
    const email = ref('');
    const subject = ref('');
    const message = ref('');

    const submitForm = () => {
      const formData = {
        email: email.value,
        subject: subject.value,
        message: message.value,
      };
      messageStore.addMessage(formData);
      email = '';
      subject = '';
      message = '';
    };
    return {
      email,
      subject,
      message,
      submitForm,
    };
  },
};
</script>

<template>
  <div class="contact-form">
    <h2>Contactez-nous</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required />
        <label for="subject">Objet :</label>
        <input type="text" id="subject" v-model="subject" required />
        <label for="message">Message :</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>
label {
  display: block;
  font-weight: bold;
}
input {
  width: 570px;
  height: 30px;
  border: 1px solid #8b0000;
}
textarea {
  width: 550px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #8b0000;
}
button {
  padding: 10px;
  font-size: 16px;
  background-color: #8b0000;
  color: #fff;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>

<script setup>
import { useMessageStore } from '../config/messageStore';

const messageStore = useMessageStore();
const messages = messageStore.messages;
</script>

<template>
  <div class="messages">
    <h2>Messages Reçus</h2>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
      <div class="message-details">
      <strong>e-mail de :</strong> {{ message.email }}<br>
      <strong>Objet :</strong> {{ message.subject }}<br>
      <strong>Message :</strong> {{ message.message }}
    </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.messages {
  padding: 20px;
}
ul {
  list-style-type: none;
  padding:0;
  width:50%;
  margin-left:25%;
}
li {
  margin-bottom:25px;
  padding: 15px;
  border: 1px solid #ffffff;
}
</style>

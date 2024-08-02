import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import apropos from './components/apropos.vue';
import contact from './components/contact.vue';
import message from './components/message.vue';
import Main from './components/Main.vue';
import Liste from './components/Liste.vue';
import Shop from './components/store.vue';
import Selectedfilm from './components/Selectedfilm.vue';
import Movie from './components/Movie.vue';

const routes = [
  {
    path: '/',
    name: 'acceuil',
    component: Main,
  },
  {
    path: '/apropos',
    name: 'apropos',
    component: apropos,
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
  },
  {
    path: '/message',
    name: 'message',
    component: message,
  },
  {
    path: '/liste',
    name: 'liste',
    component: Liste,
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Selectedfilm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');

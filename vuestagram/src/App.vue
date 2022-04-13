<template>
  <div>
    <transition name="fade">
      <ShareSuccessPage v-if="$store.state.modal == true" @modal="modal = false" />
    </transition>
    <AppHeader />
    <Section />
  </div>
</template>

<script>
import Section from './components/Section.vue';
import ShareSuccessPage from './components/shareSuccessPage.vue';
import AppHeader from './components/common/AppHeader.vue';

export default {
  name: 'App',
  components: { Section, ShareSuccessPage, AppHeader },
};
</script>

<style>
@import './assets/css/fade.css';
</style>

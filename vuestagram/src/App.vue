<template>
  <div>
    <router-view></router-view>

    <transition name="fade">
      <ShareSuccessPage
        v-if="$store.state.modal == true"
        @modal="modal = false"
      />
    </transition>
    <section>
      <Section />
    </section>
  </div>
</template>

<script>
import Section from './components/Section.vue';
import ShareSuccessPage from './components/shareSuccessPage.vue';

export default {
  name: 'App',
  components: { Section, ShareSuccessPage },
};
</script>

<style>
@import './assets/css/fade.css';
</style>

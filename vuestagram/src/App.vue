<template>
  <div>
    <transition name="fade">
      <ShareSuccessPage v-if="$store.state.modal == true" @modal="modal = false" />
    </transition>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import ShareSuccessPage from '@/components/vuestagram/shareSuccessPage.vue';
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  name: 'App',
  components: { ShareSuccessPage, AppHeader },
};
</script>

<style>
@import './assets/css/common/fade.css';
</style>

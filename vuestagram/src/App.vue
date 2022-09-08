<template>
  <div>
    <transition name="fade">
      <ShareSuccessPage v-if="modal == true" />
    </transition>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import ShareSuccessPage from '@/components/vuestagram/shareSuccessPage.vue';
import AppHeader from '@/components/common/AppHeader.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { ShareSuccessPage, AppHeader },
  computed: {
    ...mapState(['modal']),
  },
};
</script>

<style>
@import './assets/css/common/fade.css';
</style>

<template>
  <div>
    <transition name="fade">
      <ShareSuccess v-if="modal == true" />
    </transition>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import ShareSuccess from '@/components/vuestagram/ShareSuccess.vue';
import AppHeader from '@/components/common/AppHeader.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { ShareSuccess, AppHeader },
  computed: {
    ...mapState(['modal']),
  },
};
</script>

<style>
@import './assets/css/common/fade.css';
</style>

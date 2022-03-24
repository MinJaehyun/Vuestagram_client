<template>
  <div>
    <div>
      <transition name="fade">
        <ShareSuccessPage
          v-if="$store.state.modal == true"
          @modal="modal = false"
        />
      </transition>
    </div>
    <div>
      <header>
        <img
          style="width: 100px; margin: 10px 10px;"
          src="./assets/image/logo.png"
          alt="logo image"
        />
      </header>
      <hr />
      <section>
        <Section />
      </section>
    </div>
  </div>
</template>

<script>
import Section from "./components/Section.vue";
import ShareSuccessPage from "./components/shareSuccessPage.vue";

export default {
  name: "App",
  components: { Section, ShareSuccessPage },
};
</script>

<style>
@import "./assets/css/fade.css";
</style>

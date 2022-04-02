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
      <header class="header">
        <div>
          <p>Vuestagram</p>
        </div>
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
@import url("https://fonts.googleapis.com/css2?family=Allura&display=swap");

.header {
  padding: 15px;
  text-align: center;
  font-family: "Allura", cursive;
  font-size: 40px;
  line-height: 0.6;
}
</style>

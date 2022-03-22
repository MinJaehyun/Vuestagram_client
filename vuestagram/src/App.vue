<template>
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
</template>

<script>
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: { Section },
};
</script>

<style></style>

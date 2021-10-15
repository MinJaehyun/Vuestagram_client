<template>
  <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :post="post"/>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import post from './assets/data/post';

export default {
  name: 'App',
  data () {
    return {
      post: post,
    }
  },  
  components: { Container, },
}
</script>

<style>
@import 'assets/css/app.css';
</style>

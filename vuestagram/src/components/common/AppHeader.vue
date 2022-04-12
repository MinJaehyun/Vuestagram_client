<template>
  <div>
    <!-- FIXME: to="" 문자열만 받도록 되어 있는데, api/index.js 주소를 가져오는게 효율적이다. -->
    <router-link @click="$emit('appNone')" to="/auth/login">Login</router-link>
    <router-link @click="$emit('appNone')" to="/auth/signup">Signup</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

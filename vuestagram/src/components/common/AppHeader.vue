<template>
  <div>
    <router-link @click="$emit('appNone')" to="/signup">Signup</router-link>
    <router-link @click="$emit('appNone')" to="/login">Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

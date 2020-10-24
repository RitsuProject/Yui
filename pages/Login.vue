<template>
  <div class="wrapper">
    <h1>...</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async mounted() {
    await this.$auth.loginWith('discord')
  },
})
</script>

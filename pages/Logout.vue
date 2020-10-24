<template>
  <h1>...</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async mounted() {
    await this.$auth.logout().then(() => {
      this.$router.push({ path: '/' })
    })
  },
})
</script>

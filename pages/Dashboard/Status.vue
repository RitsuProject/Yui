<template>
  <div class="dashboard">
    <DashNavbar />
    <div class="dash">
      <div class="header">
        <img
          src="https://yui-eight.vercel.app/ritsu-logo.svg"
          class="small-icon"
        />
      </div>
      <div class="main">
        <Tabs />
        <div class="separator"></div>
        <div class="status-container">
          <h1>AnimeThemes:</h1>
          <p :class="`${animethemes === 'Online' ? 'online' : 'offline'}`">
            {{ animethemes }}
          </p>
          <h1>Openings.moe:</h1>
          <p :class="`${openingsmoe === 'Online' ? 'online' : 'offline'}`">
            {{ openingsmoe }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data() {
    return {
      animethemes: '',
      openingsmoe: '',
    }
  },
  async mounted() {
    const statusRes = await axios({
      method: 'GET',
      url: 'https://ritsuapi.herokuapp.com/themes/status',
    })

    if (statusRes.data.animethemes === 'online') {
      this.animethemes = 'Online'
    } else {
      this.animethemes = 'Offline'
    }

    if (statusRes.data.openingsmoe === 'online') {
      this.openingsmoe = 'Online'
    } else {
      this.openingsmoe = 'Offline'
    }
  },
})
</script>

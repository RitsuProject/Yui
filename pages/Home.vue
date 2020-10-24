<template>
  <div class="wrapper">
    <!--  
      It looks like you are looking at the code on the page, hmm... 
      Well, this is a mess and it was done relatively quickly, 
      so prepare for bad and badly organized code that works, 
      this should be re-done soon.
    -->

    <section class="hero bg-image is-medium is-fullheight">
      <div class="hero-head">
        <MainNavbar />
      </div>
      <div class="hero-body">
        <div class="container margin">
          <img src="ritsu-logo.svg" class="logo" />
          <br />
          <h2 class="subtitle color">
            A bot on Discord based on the game of guessing the anime by its
            <br />
            Ending or Opening theme!
          </h2>
          <a
            href="https://discord.com/oauth2/authorize/?permissions=3145728&scope=bot&client_id=763934732420382751"
          >
            <button class="button round">Add me on your server!</button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

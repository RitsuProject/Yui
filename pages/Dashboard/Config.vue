<template>
  <div class="dashboard">
    <DashNavbar />
    <div class="dash">
      <div class="buttons">
        <button class="fancyButton">
          <span class="icon"><i class="fas fa-long-arrow-alt-left"></i></span
          ><nuxt-link to="/dashboard">Go Back</nuxt-link>
        </button>
      </div>
      <div class="header">
        <img
          src="https://cdn.discordapp.com/icons/473520284398387200/ca6547322a97447f41e402b365583c7f.png"
          class="config-icon"
        />
      </div>
      <h1 class="config-header">{{ serverName }}</h1>
      <div class="separator"></div>
      <div class="main">
        <div class="config-container">
          <label>Prefix</label>
          <input
            class="input"
            type="text"
            :placeholder="config.prefix"
            v-model="newConfig.prefix"
          />
          <br />
          <label>Provider</label>
          <br />
          <div class="select">
            <select v-model="newConfig.provider">
              <option>AnimeThemes</option>
              <option>Openings.moe</option>
            </select>
          </div>
          <br />
          <br />
          <button @click="save()" class="fancyButton">
            Save the configuration
          </button>
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
      serverName: '',
      serverIcon: '',
      config: {
        provider: '',
        prefix: '',
      },
      newConfig: {
        provider: '',
        prefix: '',
      },
    }
  },
  async mounted() {
    const { id } = this.$route.params

    this.$toast
      .show(`Getting the guild (${id}) configuration...uwu`)
      .goAway(2000)

    const guildsConfigRes = await axios({
      method: 'GET',
      url: `https://ritsuapi.herokuapp.com/guilds/${id}/config`,
      headers: {
        Authorization: this.$auth.getToken('discord'),
      },
    })

    this.$toast
      .show(`Meow! Loaded the guild (${id}) configuration!`)
      .goAway(2000)

    this.serverName = guildsConfigRes.data.guild.name
    this.config.prefix = guildsConfigRes.data.guild.prefix
    this.config.provider = guildsConfigRes.data.guild.provider

    this.newConfig.prefix = guildsConfigRes.data.guild.prefix
    this.newConfig.provider = `${
      guildsConfigRes.data.guild.provider === 'animethemes'
        ? 'AnimeThemes'
        : 'Openings.moe'
    }`
  },
  methods: {
    async save() {
      const { id } = this.$route.params

      if (this.newConfig.prefix === '')
        return this.$toast.show('Prefix cannot be empty.')

      let provider
      if (this.newConfig.provider === 'Openings.moe') {
        provider = 'openingsmoe'
      } else if (this.newConfig.provider === 'AnimeThemes') {
        provider = 'animethemes'
      }

      const patchConfigRes = await axios({
        method: 'PATCH',
        url: `https://ritsuapi.herokuapp.com/guilds/${id}/config`,
        headers: {
          Authorization: this.$auth.getToken('discord'),
        },
        data: {
          config: {
            prefix: this.newConfig.prefix,
            provider: provider,
          },
        },
      })

      this.$toast.show('Saved!').goAway(2000)
    },
  },
})
</script>

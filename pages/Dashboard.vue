<template>
  <div class="dashboard">
    <DashNavbar />
    <div class="dash">
      <div class="header">
        <img src="ritsu-logo.svg" class="small-icon" />
      </div>
      <div class="main">
        <Tabs />
        <input
          placeholder="Search"
          class="search-input"
          v-model="search"
          @change="searchGuilds()"
        />
        <div class="servers">
          <div class="all" v-if="!search">
            <div
              class="server"
              v-for="guild in guilds"
              :key="(guild.name, guild.icon, guild.id, guild.haveRitsu)"
            >
              <img
                :src="
                  guild.icon === null
                    ? `https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`
                    : `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                "
                class="server-icon"
              />
              <nuxt-link
                class="server-name"
                :to="`/dashboard/config/${guild.id}`"
                >{{ guild.name }}</nuxt-link
              >
            </div>
          </div>
          <div class="result" v-else>
            <div
              class="server"
              v-for="guild in searchResult"
              :key="(guild.name, guild.icon, guild.id)"
            >
              <img
                :src="
                  guild.icon === null
                    ? `https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`
                    : `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                "
                class="server-icon"
              />
              <nuxt-link
                class="server-name"
                :to="`/dashboard/config/${guild.id}`"
                >{{ guild.name }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import stringSimilarity from 'string-similarity'
export default Vue.extend({
  data() {
    return {
      guilds: new Array(),
      searchResult: new Array(),
      search: '',
    }
  },
  async mounted() {
    this.$toast.show("I'm loading...owo").goAway(2000)
    const guildsResponse = await axios({
      method: 'GET',
      url: 'https://ritsuapi.herokuapp.com/user/guilds',
      headers: {
        Authorization: this.$auth.getToken('discord'),
      },
    })

    for (const g in guildsResponse.data) {
      const guild = guildsResponse.data[g]

      this.guilds.push(guild)
    }
    this.$toast.show('YAY! I loaded your servers ^w^').goAway(2000)
  },
  methods: {
    searchGuilds() {
      this.searchResult = new Array()
      const filter = this.guilds.filter(
        (g) => stringSimilarity.compareTwoStrings(this.search, g.name) > 0.25
      )
      filter.forEach((g) => {
        this.searchResult.push(g)
      })
    },
  },
})
</script>

<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="ritsu_small.svg" class="logo-small" />
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">
            <span class="icon"><i class="fas fa-home"></i></span>Home<span
            ></span>
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/howtoplay">
            <span class="icon"><i class="fas fa-gamepad"></i></span>How to
            Play<span></span>
          </nuxt-link>
          <span class="navbar-item" v-if="!$auth.loggedIn">
            <a class="button is-inverted" href="/login">
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
              <span>Login</span>
            </a>
          </span>
          <span class="navbar-item" v-else>
            <nuxt-link to="/dashboard">
              <img
                v-bind:src="`https://cdn.discordapp.com/avatars/${$auth.user.id}/${$auth.user.avatar}.png`"
                class="user-icon"
              />
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

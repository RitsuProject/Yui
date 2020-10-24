<template>
  <div class="wrapper">
    <section class="hero is-danger is-fullheight is-medium">
      <div class="hero-head">
        <MainNavbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">How to Play</h1>
          <h2 class="subtitle">Learn how to play the game!</h2>
          <div class="box">
            <img src="ritsu_start.png" class="ins" />
            <h1 class="title black">Start the game.</h1>
            <p>
              When executing this command, you will start a game with the
              default settings, which includes 3 rounds of 30 seconds with
              random themes.
            </p>
          </div>
          <div class="box">
            <img src="ritsu_round.png" class="ins" />
            <h1 class="title black">Now it's time to guess!</h1>
            <p>
              You now need to type in the chat in less than 30 seconds what is
              the opening / ending anime that the bot is playing, if you get it
              right, the bot will delete your message and let you know you got
              it right, if not, she will ignore it.
            </p>
          </div>
          <div class="box">
            <img src="ritsu_end.png" class="ins" />
            <h1 class="title black">After all the rounds are over.</h1>
            <p>
              When all the rounds are over, whoever guesses the most animes
              wins, if they tie, the bot will choose one of the people.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

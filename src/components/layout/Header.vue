<template>
  <header class="hero is-light">
    <div class="hero-head">
      <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item is-brand">
            <img class="navbar-brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1000px-MarvelLogo.svg.png" alt="Marvel Characters List">
          </a>
          <router-link exact to="/" class="navbar-item is-tab is-hidden-desktop"><span class="is-small">Chars</span></router-link>
          <router-link exact to="/events" class="navbar-item is-tab is-hidden-desktop"><span class="is-small">Events</span></router-link>
        </div>
        <!-- <div class="navbar-menu navbar-end" id="navMenu">
          <router-link exact to="/" class="navbar-item is-tab is-hidden-tablet is-active">Lista</router-link>
        </div> -->
      </nav>
    </div>
  </header>
</template>

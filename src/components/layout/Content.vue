<template>
  <div class="wrapper">
    <div class="columns">
      <aside class="column is-2 aside">
        <nav class="menu">
          <p class="menu-label">
            Lists
          </p>
          <ul class="menu-list">
            <li><router-link exact to="/"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Characters </router-link></li>
          </ul>
          <ul class="menu-list">
            <li><router-link exact to="/events"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Events </router-link></li>
          </ul>
        </nav>
      </aside>

      <main class="column main">
        <router-view/>
      </main>
    </div>
  </div>
</template>

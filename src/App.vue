<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation" >
        <div>
          <router-link :to="{ name: 'Home' }" class="navbar-item">
            <img src="https://docs.knownorigin.io/press-kit/Black-blue-ko-logo.svg"  height="28" alt="Knownorigin logo">
          </router-link>
        </div>
      </nav>
    </div>
    <SalesStats />
    <section>
      <div >
        <p>
          KO sales stats app
        </p>
      </div>
    </section>
    <footer>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SalesStats from '@/Views/SalesStats.vue';

export default defineComponent({
  name: 'App',
  components: {
    SalesStats,
  },
  methods: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

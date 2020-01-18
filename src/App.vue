<template >

  <div id="app" >

  <div id="notificacione" class="notification is-warning" v-if="isHidden">
  <button class="delete" v-on:click="alerta"></button>
  <strong>Alert!</strong>, Lluvias intensas, el Río Tula se va a desbordar.
  <br>
  Tienes 2 h 30 min para evacuar.
</div>
  <link href="https://fonts.googleapis.com/css?family=Abel&display=swap" rel="stylesheet">
    <div id="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" style="font-family: 'Abel', sans-serif;font-size: 35px; border:2px">
          assistic
        </a>

        <a id="hamburguer" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="toogleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarmenuid" class="navbar-menu">
    <div class="navbar-start">
        <router-link class="navbar-item" to="/home">Home</router-link>
        <router-link class="navbar-item" to="/me/albergue">Mi Albergue</router-link>
        <router-link class="navbar-item" to="/albergues">Mas Albergues</router-link>
        <router-link class="navbar-item" to="/mapa">Mapa</router-link>
      
    </div>
    </div>
    </nav>
    </div>
    <div class="container" style="height: 100%">
      <div class="notification">
        <router-view/>
        <button v-on:click="alerta">simulate notification</button>
      </div>
    </div>
  </div>
</template>
<script>

// import http from '../mixins/axios'
export default {
  name: 'app',
  data: function(){
    return {
      isHidden: !true
    }
  },
  methods: {
    toogleMenu() {
      document.getElementById('navbarmenuid').classList.toggle('is-active')
      document.getElementById('hamburguer').classList.toggle('is-active')
    },
    alerta(){
      this.isHidden = !this.isHidden
    }
  }
}
</script>
<style>

</style>
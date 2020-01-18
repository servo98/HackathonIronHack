<template>
  <div class="">
   
    <form  onsubmit="event.preventDefault();">
       <div class="field">
        <label class="label">Correo</label>
        <div class="control">
            <input id="email" class="input" type="email" placeholder="correo@ejemplo.com">
        </div>
        </div>
        <div class="field">
        <label class="label">Contraseña</label>
        <div class="control">
            <input id="password" class="input" type="password" placeholder="*********">
        </div>
        </div>
        <div class="field">
        <div class="control">
            <button class="button is-link">Enviar</button>
        </div>
        </div>
    </form>
  </div>
</template>

<script>

import http from '../mixins/axios'
export default {
  name: 'Login',
  mixins: [http],
  methods: {
      
  }
}
</script>
